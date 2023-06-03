const sum = require("./practice")


test("to get my results about this", () => {
    expect(sum.sum(40,20)).toBe(800)
} )

test("split my results", () => {
    expect(sum.split(10,5)).toBe(2)
})

test("testing my more", () => {
    expect(sum.more(10,2)).toBe(12)
})
