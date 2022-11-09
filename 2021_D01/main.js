const fs = require("fs")

let total = 0
const path = "2021_D01/input.txt"
const entries = fs.readFileSync(path).toString().split('\n'); 

let increments = entries.reduce((previous, current) => {
    Number(current) > Number(previous) ? total += 1 : null
    return current
})