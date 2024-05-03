/** @format */

import { getPagination } from "../../src/utils/pagination";
// Should return a Pagination object with correct properties
it("should return a Pagination object with correct properties when totalItems is greater than 0", () => {
    const totalItems = 10;
    const limit = 5;
    const page = 1;

    const pagination = getPagination(totalItems, limit, page);

    expect(pagination.page).toBe(page);
    expect(pagination.limit).toBe(limit);
    expect(pagination.totalItems).toBe(totalItems);
    expect(pagination.totalPage).toBe(2);
    expect(pagination.prev).toBeUndefined();
    expect(pagination.next).toBe(2);
});
