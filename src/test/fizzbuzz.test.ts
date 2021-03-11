import { Example } from "../main/example";

const fizzbuzz = (n: number) => {
  if (n % 3 === 0 && n % 5 === 0)
    return "fizzbuzz"
  if (n % 3 === 0)
    return "fizz"
  if (n % 5 === 0)
    return "buzz"
  return n.toString();
};

describe("fizzbuzz", () => {
  it("should return '1' when we pass 1", () => {
    const output = fizzbuzz(1);
    const expected = "1";
    expect(output).toBe(expected);
  });

  it("should return '2' when we pass 2", () => {
    const output = fizzbuzz(2);
    const expected = "2";
    expect(output).toBe(expected);
  });

  it("should return 'fizz' when we pass 3", () => {
    const output = fizzbuzz(3);
    const expected = "fizz";
    expect(output).toBe(expected);
  });

  it("should return 'fizz' when we pass 9", () => {
    const output = fizzbuzz(9);
    const expected = "fizz";
    expect(output).toBe(expected);
  });

  it("should return 'buzz' when we pass 5", () => {
    const output = fizzbuzz(5);
    const expected = "buzz";
    expect(output).toBe(expected);
  });

  it("should return 'buzz' when we pass 25", () => {
    const output = fizzbuzz(25);
    const expected = "buzz";
    expect(output).toBe(expected);
  });

  it("should return 'fizzbuzz' when we pass 15", () => {
    const output = fizzbuzz(15);
    const expected = "fizzbuzz";
    expect(output).toBe(expected);
  });

  it("should return 'fizzbuzz' when we pass 45", () => {
    const output = fizzbuzz(45);
    const expected = "fizzbuzz";
    expect(output).toBe(expected);
  });
});
