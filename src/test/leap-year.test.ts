const isLeapYear = (n: number)=>{
  return false
}

describe("isLeapYear", () => {
  it("should return false if input is 1", () => {
    expect(isLeapYear(1)).toBe(false)
  })

  it("should return true if input is 8", () => {
    expect(isLeapYear(8)).toBe(true)
  })
});
