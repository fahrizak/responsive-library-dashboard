import _ from "lodash"

export const returnpaginationRange = (totalPage, currentPage, siblings) => {
    let totalPageNoInArray = 6;
    if (totalPageNoInArray >= totalPage) {
        return _.range(1, totalPage + 1);
    }

    let leftSiblingsIndex = Math.max(currentPage - siblings, 1);
    let rightSiblingsIndex = Math.min(currentPage + siblings, totalPage);

    let showLeftDots = leftSiblingsIndex > 1;
    let showRightDots = rightSiblingsIndex < totalPage;

    if (!showLeftDots && showRightDots) {
        let leftItemsCount = 1 + 2 * siblings;
        let leftRange = _.range(1, leftItemsCount + 1);
        return [...leftRange, " ...", totalPage];

    } else if (showLeftDots && !showRightDots) {
        let rightItemsCount = 1 + 2 * siblings;
        let rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1);
        return [1, "... ", ...rightRange];

    } else {
        let middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);
        return [1, "... ", ...middleRange, " ...", totalPage];
    }
};
