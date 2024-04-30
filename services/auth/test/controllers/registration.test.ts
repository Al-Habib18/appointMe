/** @format */

// Successfully validate the request body and create a new user with role "ADMIN", create a verification code, and send an email to the user with the verification code.
it('should create a new user with role "ADMIN", create a verification code, and send an email to the user with the verification code', async () => {
    // Mock the request and response objects
    const req = {
        body: {
            email: "example@example.com",
            password: "password123",
            name: "John Doe",
            role: "ADMIN",
        },
    };

    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
    };

    // Mock the dependencies
    const getExitingUserMock = jest.fn().mockResolvedValue(null);
    const generateHashMock = jest.fn().mockResolvedValue("hashedPassword");
    const createUserMock = jest.fn().mockResolvedValue({
        id: "userId",
        email: "example@example.com",
        name: "John Doe",
        role: "ADMIN",
    });
    const createVerificationCodeMock = jest
        .fn()
        .mockResolvedValue("verificationCode");
    const sendToQueueMock = jest.fn();

    // Mock the axios post requests
    const axiosPostMock = jest.fn();

    // Import the function under test and override the dependencies
    jest.doMock("../../src/lib/index", () => ({
        getExitingUser: getExitingUserMock,
        createUser: createUserMock,
        createVerifiactionCode: createVerificationCodeMock,
    }));

    jest.doMock("../../src/utils/index", () => ({
        generateHash: generateHashMock,
    }));

    jest.doMock("../../src/sender/auth", () => ({
        sendToQueue: sendToQueueMock,
    }));

    jest.doMock("axios", () => ({
        post: axiosPostMock,
    }));

    // Import the function under test after mocking the dependencies
    const registrationController =
        require("../../src/controllers/registration").default;

    // Invoke the function under test
    await registrationController(req, res);

    // Assertions
    expect(getExitingUserMock).toHaveBeenCalledWith("example@example.com");
    expect(generateHashMock).toHaveBeenCalledWith("password123");
    expect(createUserMock).toHaveBeenCalledWith({
        email: "example@example.com",
        name: "John Doe",
        password: "hashedPassword",
        role: "ADMIN",
    });
    expect(createVerificationCodeMock).toHaveBeenCalledWith("userId");
    expect(sendToQueueMock).toHaveBeenCalledWith(
        "auth_exchange",
        "registration",
        {
            from: "alhabib@gmail.com",
            to: "example@example.com",
            subject: "user registration",
            text: "Your Verification code is verificationCode",
            source: "user_registration",
        }
    );
    expect(axiosPostMock).not.toHaveBeenCalled();

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
        message: "User created successfully",
        user: {
            id: "userId",
            email: "example@example.com",
            name: "John Doe",
            role: "ADMIN",
        },
        Code: "verificationCode",
    });
});
