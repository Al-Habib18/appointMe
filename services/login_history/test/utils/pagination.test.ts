/** @format */

import { getPagination } from "../../src/utils/pagination";
// Should return a pagination object with correct properties when given valid input
it("should return a pagination object with correct properties when given valid input", () => {
    // Arrange
    const totalItems = 100;
    const limit = 10;
    const page = 1;

    // Act
    const result = getPagination(totalItems, limit, page);

    // Assert
    expect(result.page).toBe(page);
    expect(result.limit).toBe(limit);
    expect(result.totalItems).toBe(totalItems);
    expect(result.totalPage).toBe(10);
    expect(result.prev).toBeUndefined();
    expect(result.next).toBe(2);
});
