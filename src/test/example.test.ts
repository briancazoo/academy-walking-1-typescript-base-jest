const numerals = (number: number): string => {
  return "I";
};

describe("example test", () => {
  it('should return "I" when inputting 1', () => {
    const result = numerals(1);
    expect(result).toBe("I");
  });
    it('should return "II" when inputting 2', () => {
        const result = numerals(2);
        expect(result).toBe("II");
    });
});
