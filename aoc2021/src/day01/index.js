import run from "aocrunner";

const parseInput = (rawInput) => rawInput.split('\n').map((n) => Number(n));

const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  const max = input.length -1;

  let increase = 0;

  for (let i = 0; i < max; i++) {
    input[i + 1] > input[i] && increase++;
  }

  return increase;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  const max = input.length -1;

  let increases = 0;

  for (let i = 0; i < max; i++) {
    (input[i + 1] + input[i + 2] + input[i + 3]) > (input[i] + input[i + 1] + input[i + 2]) && increases++;
  }

  return increases;
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
