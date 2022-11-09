const fs = require("fs");
const { validateRequest } = require("twilio/lib/webhooks/webhooks");

const path = "2021_D02/input.txt";
const entries = fs.readFileSync(path).toString().split("\n");

const solution1 = () => {
  let depth = 0;
  let forward = 0;
  entries.forEach((element) => {
    let [keyword, value] = element.split(" ");
    value = Number(value);
    switch (keyword) {
      case "forward":
        forward += value;
        break;
      case "down":
        depth += value;
        break;
      case "up":
        depth -= value;
        break;
      default:
        throw new Error(`${keyword} is not good oops`);
    }
  });
};

const solution2 = (entries) => {
  let depth = 0;
  let forward = 0;
  let aim = 0;
  for (let entry of entries) {
    let [keyword, value] = entry.split(" ");
    value = Number(value);
    switch (keyword) {
      case "forward":
        forward += value;
        depth += value * aim;
        break;
      case "down":
        aim += value;
        break;
      case "up":
        aim -= value;
        break;
      default:
        throw new Error(`${(keyword, value)} is incorrect ????`);
    }
  }
  console.log(forward * depth);
};

solution2(entries);
