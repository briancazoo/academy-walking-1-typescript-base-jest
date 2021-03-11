const isLeapYear = (n: number)=>{
  return n === 8
}

describe("isLeapYear", () => {
  it("should return false if input is 1", () => {
    expect(isLeapYear(1)).toBe(false)
  })

  it("should return true if input is 8", () => {
    expect(isLeapYear(8)).toBe(true)
  })

  it("should return false if input is 2", () => {
    expect(isLeapYear(2)).toBe(false)
  })

  it("should return true if input is 4", () => {
    expect(isLeapYear(4)).toBe(true)
  })
});
