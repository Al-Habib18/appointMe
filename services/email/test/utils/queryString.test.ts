/** @format */

import { generateQueryString } from "../../src/utils/queryString";
// Returns a string with encoded key-value pairs separated by '&'
it('should return a string with encoded key-value pairs separated by "&"', () => {
    const query = {
        key1: "value1",
        key2: "value2",
        key3: "value3",
    };
    const expected = "key1=value1&key2=value2&key3=value3";
    const result = generateQueryString(query);
    expect(result).toEqual(expected);
});
