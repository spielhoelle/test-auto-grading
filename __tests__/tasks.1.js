beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('Console output', () => {
    test('console should print string', () => {
        const solution = require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith('This is an exercise in console logging');
    })
})