const _numerals = (
  number: number,
  roots: string[] = ["I", "V", "X"]
): string => {
  const digit = roots[0];
  const bases: { [key: number]: string } = {
    0: "",
    5: roots[1],
    10: roots[2],
  };
  let key = 0;
  if (number < 5) {
    key = 0;
  } else if (number < 10) {
    key = 5;
  } else {
    key = 10;
  }

  const base = bases[key];
  const nextBase = bases[key + 5];

  let result = ["", digit, digit + digit, digit + digit + digit];

  if (number % 5 === 4) {
    return digit + nextBase;
  }
  return base + result[number % 5];
};

const numerals = (number: number): string => {
  if (number < 10) return _numerals(number);
  return (
    _numerals(Math.floor(number / 10), ["X", "L", "C"]) + _numerals(number % 10)
  );
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
  ] as const;

  it.each(cases)("%s should return %s", (number, numeral) => {
    const result = numerals(number);
    expect(result).toBe(numeral);
  });
});
