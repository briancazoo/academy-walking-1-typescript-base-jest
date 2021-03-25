const numerals = (number: number): string => {
  const bases: { [key: number]: string } = {
    0: "",
    5: "V",
    10: "X",
  };
  let key = 0;
  if (0 <= number && number < 5) {
    key = 0;
  } else {
    key = 5;
  }

  const base = bases[key];
  const nextBase = bases[key + 5];

  let result = ["", "I", "II", "III"];
  // if (number === 10) {
  //   return "X";
  // }


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
  ] as const;

  it.each(cases)("%s should return %s", (number, numeral) => {
    const result = numerals(number);
    expect(result).toBe(numeral);
  });
});
