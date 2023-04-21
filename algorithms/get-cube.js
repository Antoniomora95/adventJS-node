// https://adventjs.dev/en/challenges/2022/6
function createCube(size) {
    function addOffset(amount) {
        return String.fromCharCode(32).repeat(amount);
    }

    function reducer(template, row, idx, arr) {
        const currentTemplate = template + row;
        return idx < arr.length - 1 ? `${currentTemplate}\n` : template;
    }

    const rowsCube = [];
    const basePattern = '_\\'.repeat(size);
    for (let row = 0; row < size; row += 1) {
        const incrementalPattern = '/\\'.repeat(row + 1);
        let completePattern = incrementalPattern + basePattern;
        const spaces = size - (row + 1);
        const offset = addOffset(spaces);
        completePattern = `${offset}${completePattern}`;
        rowsCube.push(completePattern);
    }

    const basePatternInverse = '_/'.repeat(size);
    for (let row = size; row > 0; row -= 1) {
        const incrementalPattern = '\\/'.repeat(row);
        let completePattern = incrementalPattern + basePatternInverse;
        const spaces = size - row;
        const offset = addOffset(spaces);
        completePattern = `${offset}${completePattern}`;
        rowsCube.push(completePattern);
    }

    return rowsCube.reduce(reducer, '');
}

module.exports = {
    createCube,
};
createCube(20);

// output:
//   /\_\_\_\
//  /\/\_\_\_\
// /\/\/\_\_\_\
// \/\/\/_/_/_/
//  \/\/_/_/_/
//   \/_/_/_/
createCube(1);

// output:
// /\_\
// \/_/
createCube(2);

// output:
//  /\_\_\
// /\/\_\_\
// \/\/_/_/
//  \/_/_/
