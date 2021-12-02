const depths = require('./input-part2.json');

const increasedQuantity = depths.reduce((acc, curr, index, allDepths) => {
    if (index + 2 === allDepths.length - 1) return acc;
    return allDepths[index + 3] > curr ? acc + 1 : acc;
}, 0);

console.log(increasedQuantity);