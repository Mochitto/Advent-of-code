const fs = require("fs");

let total = 0;
const path = "input.txt";
const entries = fs.readFileSync(path).toString().split("\n");

// console.log(entries);
// let increments = entries.reduce((previous, current) => {
//   Number(current) > Number(previous) ? (total += 1) : null;
//   return current;
// });

let groupsOfThree = entries.reduce((prev, current, index, array) => {
  if (index <= 1) {
    return;
  }
  const prevNum = Number(array[index - 1]) || 0;
  const prevPrevNum = Number(array[index - 2]) || 0;
  const tripleGroup = prevNum + prevPrevNum + Number(current);
  if (prev < tripleGroup && prev) {
    total++;
  }

  console.log(
    index,
    "|",
    prevPrevNum,
    prevNum,
    current,
    "triple",
    tripleGroup,
    "total",
    total
  );
  return tripleGroup;
});
console.log(total);
