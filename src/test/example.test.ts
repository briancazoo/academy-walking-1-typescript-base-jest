const numerals = (number: number): string => {
  let result = ["", "I", "II", "III"];
  if (number === 10) {
      return "X"
  }

  if (number >= 5) {
      return "V" + result[number - 5] 
  }

  return result[number];
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
    [10, "X"],
  ] as const;

  it.each(cases)("%s should return %s", (number, numeral) => {
    const result = numerals(number);
    expect(result).toBe(numeral);
  });
});
