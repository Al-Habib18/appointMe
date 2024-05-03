/** @format */

import { getHATEOAS } from "../../src/utils/hateos";
// Should return a Links object with self link when hasNext and hasPrev are false
it("should return a Links object with self link when hasNext and hasPrev are false", () => {
    const data = {
        url: "example.com",
        path: "/path",
        query: {},
        hasNext: false,
        hasPrev: false,
        page: 1,
    };

    const result = getHATEOAS(data);

    expect(result.self).toBe("example.com");
    expect(result.next).toBeUndefined();
    expect(result.prev).toBeUndefined();
});

// Should return a Links object with self link when data.url is undefined
