const depths = require('./input.json');

const increasedQuantity = depths.reduce((acc, curr, index, allDepths) =>
    (index === 0 || curr <= allDepths[index - 1]) ? acc : acc + 1, 0);

console.log(increasedQuantity);