const _numerals = (number: number, digit: string = "I"): string => {
  const bases: { [key: string]: string[] } = {
    I: ["I", "V", "X"],
    X: ["X", "L", "C"],
    C: ["C", "D", "M"],
    M: ["M", "", ""],
  };

  const base = bases[digit][1];
  const nextBase = bases[digit][2];

  let baseUnit = ["", digit, digit + digit, digit + digit + digit];

  if (number <= 3) {
    return baseUnit[number];
  }
  if (number === 4) {
    return digit + base;
  }
  if (number % 5 === 4) {
    return digit + nextBase;
  }
  return base + baseUnit[number % 5];
};

const numerals = (number: number): string => {
  if (number < 10) return _numerals(number);
  if (number < 100)
    return _numerals(Math.floor(number / 10), "X") + numerals(number % 10);
  if (number < 1000)
    return _numerals(Math.floor(number / 100), "C") + numerals(number % 100);

  return _numerals(Math.floor(number / 1000), "M") + numerals(number % 1000);
};

describe("example test", () => {
  const cases = [
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [7, "VII"],
    [8, "VIII"],
    [9, "IX"],
    [10, "X"],
    [11, "XI"],
    [14, "XIV"],
    [19, "XIX"],
    [20, "XX"],
    [30, "XXX"],
    [40, "XL"],
    [50, "L"],
    [60, "LX"],
    [70, "LXX"],
    [80, "LXXX"],
    [90, "XC"],
    [100, "C"],
    [101, "CI"],
    [200, "CC"],
    [400, "CD"],
    [800, "DCCC"],
    [846, "DCCCXLVI"],
    [900, "CM"],
    [1000, "M"],
    [1999, "MCMXCIX"],
    [2008, "MMVIII"],
    [3999, "MMMCMXCIX"],
  ] as const;

  it.each(cases)("%s should return %s", (number, numeral) => {
    const result = numerals(number);
    expect(result).toBe(numeral);
  });
});
