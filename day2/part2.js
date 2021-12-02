
const { horizontal, depth } = require('./input-part1.json').reduce((acc, curr) => curr.split(' ')[0] === 'forward' ? { ...acc, horizontal: acc.horizontal + Number(curr.split(' ')[1]), depth: acc.depth + (acc.aim * Number(curr.split(' ')[1])) } : curr.split(' ')[0] === 'up' ? { ...acc, aim: acc.aim - Number(curr.split(' ')[1]) } : { ...acc, aim: acc.aim + Number(curr.split(' ')[1]) }, { horizontal: 0, depth: 0, aim: 0 });
console.log(horizontal * depth);
