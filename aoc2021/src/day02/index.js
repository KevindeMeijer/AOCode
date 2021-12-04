import run from "aocrunner";

// const parseInput = (rawInput) => rawInput.split('\n');
const parseInput = (rawInput) => rawInput.split("\n").map(instruction => instruction.split(" "))

const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  const nav = {
    up: 0,
    down: 0,
    forward:0,
  }

  for (let i = 0; i < input.length; i++) {
    const [dir, dist] = input[i]
    nav[dir] += parseInt(dist, 10)
  }

  console.log(input)

  const { up, down, forward} = nav

  return (down-up) * forward;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
  trimTestInputs: true,
});
