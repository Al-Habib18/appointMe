/** @format */

import { generateHash, getAccessToken } from "../../src/utils";

// Test the generateHash function
it("should generate a hash with salt round of 10", async () => {
    const payload = "test payload";
    const hash = await generateHash(payload);
    expect(hash).toBeDefined();
    expect(typeof hash).toBe("string");
});

// test the getAccessToken function
it("should generate a valid JWT access token when user data is provided", () => {
    // Arrange
    const userData = {
        id: "123",
        email: "test@example.com",
        name: "John Doe",
        role: "admin",
    };

    // Act
    const accessToken = getAccessToken(userData);

    // Assert
    expect(accessToken).toBeDefined();
    expect(typeof accessToken).toBe("string");
});
