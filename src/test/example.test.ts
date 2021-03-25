const numerals = (number: number): string => {
  const bases: { [key: number]: string } = {
    0: "",
    5: "V",
    10: "X",
  };
  let key = 0;
  if (number < 5) {
    key = 0;
  } else if (number < 10) {
    key = 5;
  } else {
    key = 10
  }

  const base = bases[key];
  const nextBase = bases[key + 5];

  let result = ["", "I", "II", "III"];

  if (number % 5 === 4) {
    return "I" + nextBase;
  }
  return base + result[number % 5];
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
  ] as const;

  it.each(cases)("%s should return %s", (number, numeral) => {
    const result = numerals(number);
    expect(result).toBe(numeral);
  });
});
