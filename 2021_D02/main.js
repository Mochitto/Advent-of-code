const fs = require("fs")

const path = "2021_D02/input.txt";
const entries = fs.readFileSync(path).toString().split("\n");

let depth = 0
let forward = 0

entries.forEach(element => {
    let [keyword, value] = element.split(" ")
    value = Number(value)
    switch (keyword) {
        case "forward":
            forward += value
            break
        case "down":
            depth += value
            break
        case "up":
            depth -= value
            break
        default:
            throw new Error(`${keyword} is not good oops`)
    }
});

console.log(depth * forward)