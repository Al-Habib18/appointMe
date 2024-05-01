/** @format */

import { generateQueryString } from "../../src/utils/queryString";
// Handles objects with circular references
it("should handle objects with circular references", () => {
    const query = {
        key1: "value1",
        key2: "value2",
        key3: "value3",
    };
    const expected = "key1=value1&key2=value2&key3=value3";
    const result = generateQueryString(query);
    expect(result).toEqual(expected);
});
