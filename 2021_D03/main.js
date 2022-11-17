const fs = require("fs");

/* PLANNING:
1. Get most common bit of the column
2. Put numbers together
3. Invert the number (get epsilon)
4. Turn to decimals
 */

const path = "2021_D03/input.txt";
const entries = fs.readFileSync(path).toString().split("\n");

// let counterArray = Array.from({length: entries[0].length}, (element, index) => 5+index*2)

// CounterArray is the counter of each column's 1s 
let counterArray = Array.from({length: entries[0].length}, element=> 0)
const fileLength = entries.length  

// 1. Get most common bit of the column
for (let i = 0; i < fileLength; i++) {
    let reading = entries[i].split("")

    // Increment each column of counterArray if the number is 1
    for (let [index, bit] of reading.entries()) {
        counterArray[index] += (bit == "1") ? 1 : 0
    }
}


const halfFileLength = Math.floor(fileLength/2)
let gammaRate = ""

// 2. Put numbers together
for (let countOfOnes of counterArray) {
    gammaRate += (countOfOnes > halfFileLength) ? "1" : "0"
}
// 3. Invert the number (get epsilon)
let epsilonRate = gammaRate.replace(/\d/g, digit => digit == "1" ? "0" : "1")

// 4. Turn to decimals
let decimalGammaRate = parseInt(gammaRate, 2)
let decimalEpsilonRate = parseInt(epsilonRate, 2)

let answer = decimalGammaRate * decimalEpsilonRate

console.log(answer)
