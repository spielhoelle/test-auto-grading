const rewire = require("rewire")
const solution = rewire("../solution")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('Profile Variables', () => {
    test.each`
    variableName 
    ${"job"}
    ${"city"}
    ${"age"}
    `('$variableName variable should exist', ({variableName}) => {
        const variable = solution.__get__(variableName)
        expect(variable).toBeDefined()
    });

    test.each`
    variableName 
    ${"job"}
    ${"city"}
    `('$variableName variable should have string value', ({variableName}) => {
        const variable = solution.__get__(variableName)
        expect(typeof variable).toBe("string")
    });

    test('age variable should have value', () => {
        const age = solution.__get__("age")
        expect(age).toBeTruthy()
    })
    
    test('profile variables are logged', () => {
        const firstName = solution.__get__("firstName")
        const lastName = solution.__get__("lastName")
        const job = solution.__get__("job")
        const city = solution.__get__("city")
        const age = solution.__get__("age")
        require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith(firstName, lastName, age, city, job);
    })
})