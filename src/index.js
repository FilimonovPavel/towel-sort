module.exports = function towelSort(matrix = []) {
    const result = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i === 0 || !(i % 2)) {
            result.push(...matrix[i]);
        } else {
            result.push(...matrix[i].reverse());
        }
    }

    return result;
};
