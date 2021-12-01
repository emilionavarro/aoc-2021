const depths = require('./input-part2.json');

const increasedQuantity = depths.reduce((acc, curr, index, allDepths) => {
    if (index + 2 === allDepths.length - 1) return acc;
    const currSum = curr + allDepths[index + 1] + allDepths[index + 2];
    const nextSum = allDepths[index + 1] + allDepths[index + 2] + allDepths[index + 3];
    return nextSum > currSum ? acc + 1 : acc;
}, 0);

console.log(increasedQuantity);