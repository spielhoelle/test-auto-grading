const rewire = require("rewire")
const solution = rewire("../solution")

const expectedOutputString = "This is the value."

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('Variables', () => {
    test('exercise variable should exist', () => {
        const exercise = solution.__get__("exercise")
        expect(exercise).toBeDefined()
    })
    test('exercise variable should have string value', () => {
        const exercise = solution.__get__("exercise")
        expect(exercise).toBe(expectedOutputString)
    })
    test('exercise variable is logged', () => {
        const solution = require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith(expectedOutputString);
    })
})