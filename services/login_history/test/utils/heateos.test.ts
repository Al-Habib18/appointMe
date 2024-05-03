/** @format */

import { getHATEOAS } from "../../src/utils/hateos";
// Should return an object with 'self' property set to the provided url
it("should return an object with 'self' property set to the provided url when query is empty", () => {
    const data = {
        url: "https://example.com",
        path: "/path",
        query: {},
        hasNext: false,
        hasPrev: false,
        page: 1,
    };

    const result = getHATEOAS(data);

    expect(result.self).toBe(data.url);
});
