function stringCalculator(numbers: string) {
  if (numbers.includes('-')) throw new Error()
  const hasCustomDelimiter = numbers.startsWith("//");
  const [delimiter, input] = hasCustomDelimiter
    ? [numbers[2], numbers.slice(4)]
    : [",", numbers];

  return input
    .replace("\n", delimiter)
    .split(delimiter)
    .reduce((total, number) => Number(number) + total, 0);
}

describe("stringCalculator", () => {
  it.each([
    ["", 0],
    ["1", 1],
    ["2", 2],
    ["3", 3],
  ])("takes %s and returns %d", (input, expected) => {
    expect(stringCalculator(input)).toBe(expected);
  });

  it.each([
    ["0,1", 1],
    ["0,2", 2],
    ["0,3", 3],
    ["1,1", 2],
    ["1,2", 3],
    ["1,3", 4],
    ["2,1", 3],
    ["10,10", 20],
  ])("takes %s and returns %d", (input, expected) => {
    expect(stringCalculator(input)).toBe(expected);
  });

  it.each([
    ["0\n1", 1],
    ["0\n2", 2],
    ["0\n3", 3],
  ])("takes %s and returns %d", (input, expected) => {
    expect(stringCalculator(input)).toBe(expected);
  });

  it.each([
    ["//;\n", 0],
    ["//;\n0;1", 1],
    ["//;\n0;2", 2],
    ["//|\n", 0],
    ["//|\n0|1", 1],
    ["//|\n0|2", 2],
  ])("takes %s and returns %d", (input, expected) => {
    expect(stringCalculator(input)).toBe(expected);
  });

  it("should throw an exeption when passed '-1'", () => {
    const input = "-1";
    expect(() => stringCalculator(input)).toThrow();
  });

  it.each([
    ["0,-1"],
  ])("should throw an error", (input) => {
    expect(stringCalculator(input)).toThrow();
  });
});
