/** @format */

import { generateHash, hasMatched } from "../../src/utils";
import bcrypt from "bcryptjs";
// The function should return a hashed string when given a payload and a salt round.
it("should return a hashed string when given a payload and a salt round", async () => {
    // Arrange
    const payload = "password";
    const saltRound = 10;

    // Act
    const result = await generateHash(payload, saltRound);

    // Assert
    expect(typeof result).toBe("string");
    expect(result).not.toBe(payload);
});

// The function should return true if the raw string matches the hashed string.
it("should return true when raw string matches hashed string", async () => {
    const raw = "password";
    const hash = await bcrypt.hash(raw, 10);
    const result = await hasMatched(raw, hash);
    expect(result).toBe(true);
});
