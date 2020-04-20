const func = require('../utils');

describe("My first test suite", () => {
  it("adds two numbers", () => {
    expect(func.add(1,1)).toBe(2)
  })
  it("substracts two numbers", () => {
    expect(20 - 1).toBe(19)
  })
  test('should return firstname and lastname', () => {
    const firstName = "Thomas"
    const lastName = "Lombart"
    expect(`${firstName} ${lastName}`).toBe("Thomas Lombart")
  })
  test('should return true if true', () => {
    const testsAreEssential = true
    expect(testsAreEssential).toBe(true)
  })
  test('should exist form', () => {
    const form1 = 2;
    expect(form1).toBeDefined()
  })
})