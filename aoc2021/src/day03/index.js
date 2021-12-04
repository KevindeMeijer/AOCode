import run from "aocrunner"

const parseInput = (rawInput) => rawInput.split('\n');

const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  // I'm sure there's a better way for this... 
  var first = 0
  var second = 0
  var third = 0
  var fourth = 0
  var fifth = 0
  var sixth = 0
  var seventh = 0
  var eigth = 0
  var ninth = 0
  var tenth = 0
  var eleventh = 0
  var twelfth = 0

  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    
    if (element.charAt(0) == 1) {
      first++
    }

    if (element.charAt(1) == 1) {
      second++
    }

    if (element.charAt(2) == 1) {
      third++
    }

    if (element.charAt(3) == 1) {
      fourth++
    }

    if (element.charAt(4) == 1) {
      fifth++
    }

    if (element.charAt(5) == 1) {
      sixth++
    }

    if (element.charAt(6) == 1) {
      seventh++
    }

    if (element.charAt(7) == 1) {
      eigth++
    }

    if (element.charAt(8) == 1) {
      ninth++
    }

    if (element.charAt(9) == 1) {
      tenth++
    }

    if (element.charAt(10) == 1) {
      eleventh++
    }

    if (element.charAt(11) == 1) {
      twelfth++
    }
  }

  const binary = [first, second, third, fourth, fifth, sixth, seventh, eigth, ninth, tenth, eleventh, twelfth]
  const unbinary = [first, second, third, fourth, fifth, sixth, seventh, eigth, ninth, tenth, eleventh, twelfth]

  for (var i = 0; i < 12; i++) {
    if (binary[i] > (input.length * 0.5)) {
      binary[i] = 1
    } else {
      binary[i] = 0
    }
  }

  for (var i = 0; i < 12; i++) {
    if (unbinary[i] < (input.length * 0.5)) {
      unbinary[i] = 1
    } else {
      unbinary[i] = 0
    }
  }

  var bin = binary.join('');
  var unbin = unbinary.join('');

  const gamma = parseInt(bin, 2);
  const epsilon = parseInt(unbin, 2);
  
  return gamma * epsilon;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      // { input: ``, expected: "" },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // { input: ``, expected: "" },
    ],
    solution: part2,
  },
  trimTestInputs: true,
});
