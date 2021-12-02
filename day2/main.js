
const { horizontal, depth } = require('./input-part1.json').reduce((acc, curr) => curr.split(' ')[0] === 'forward' ? { ...acc, horizontal: acc.horizontal + Number(curr.split(' ')[1]) } : curr.split(' ')[0] === 'up' ? { ...acc, depth: acc.depth - Number(curr.split(' ')[1]) } : { ...acc, depth: acc.depth + Number(curr.split(' ')[1]) }, { horizontal: 0, depth: 0 });
console.log(horizontal * depth);
