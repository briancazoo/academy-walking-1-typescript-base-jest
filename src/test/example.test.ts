const numerals = (number: number): string => {
  return "I".repeat(number);
};

describe("example test", () => {
  const cases = [
      [1, 'I'],
      [2, 'II'],
      [4, 'IV'],
  ] as const

  it.each(cases)('%s should return %s', (number, numeral) => {
    const result = numerals(number);
    expect(result).toBe(numeral);
  });
});
