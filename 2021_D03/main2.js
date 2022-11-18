const fs = require("fs");
/* Planning:
1. Go through each bit in each number to know which number (0 or 1) is common using counter function to get target binary
2. Go through each number in file to filter out numbers that don't match for both CO2 and OxygenGen numbers */

const path = "2021_D03/input.txt";
const entries = fs.readFileSync(path).toString().split("\n");
let counterArray = Array.from({ length: entries[0].length }, (element) => 0);
const fileLength = entries.length;

// 1. Get most common bit of the column
for (let i = 0; i < fileLength; i++) {
  let reading = entries[i].split("");

  // Increment each column of counterArray if the number is 1
  for (let [index, bit] of reading.entries()) {
    counterArray[index] += bit == "1" ? 1 : 0;
  }
}
const halfFileLength = Math.floor(fileLength / 2);
let targetOxygenBinary = "";

// 2. Put numbers together
for (let countOfOnes of counterArray) {
  targetOxygenBinary += countOfOnes > halfFileLength ? "1" : "0";
}
// 3. Invert the number (CO2)
let targetCO2Binary = targetOxygenBinary.replace(/\d/g, (digit) =>
  digit == "1" ? "0" : "1"
);
console.log(targetOxygenBinary, targetCO2Binary);

let oxygenRunnerUp = [];
let co2RunnerUp = [];

const filterFunction = (target, index, array) => {};
while (oxygenRunnerUp.length !== 1 && co2RunnerUp.length !== 1) {}
