import {Example} from "../main/example";

describe("fizzbuzz", () => {
    it("should return '1' when we pass 1", () => {
        const output = fizzbuzz(1)
        const expected = "1"
        expect(output).toBe(expected)
    })
})