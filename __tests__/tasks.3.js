const rewire = require("rewire")
const solution = rewire("../solution")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('Name Variables', () => {
    test.each`
    variableName 
    ${"firstName"}
    ${"lastName"}
    `('$variableName variable should exist', ({variableName}) => {
        const variable = solution.__get__(variableName)
        expect(variable).toBeDefined()
    });

    test.each`
    variableName 
    ${"firstName"}
    ${"lastName"}
    `('$variableName variable should have string value', ({variableName}) => {
        const variable = solution.__get__(variableName)
        expect(typeof variable).toBe("string")
    });
    
    test('first and last name variables are logged', () => {
        const firstName = solution.__get__("firstName")
        const lastName = solution.__get__("lastName")
        require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith(firstName, lastName);
    })
})