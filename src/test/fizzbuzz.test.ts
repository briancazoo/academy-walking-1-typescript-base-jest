import {Example} from "../main/example";
const fizzbuzz = (n: number)=> {
    return "1"
}

describe("fizzbuzz", () => {
    it("should return '1' when we pass 1", () => {
        const output = fizzbuzz(1)
        const expected = "1"
        expect(output).toBe(expected)
    })

    it("should return '2' when we pass 2", () => {
        const output = fizzbuzz(2)
        const expected = "2"
        expect(output).toBe(expected)
    })

})

