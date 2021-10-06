const rewire = require("rewire")
const solution = rewire("../solution")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('Sentence from Variables', () => {
    test('profile variables are logged in sentence', () => {
        const firstName = solution.__get__("firstName")
        const lastName = solution.__get__("lastName")
        const job = solution.__get__("job")
        const city = solution.__get__("city")
        const age = solution.__get__("age")
        const sentence = `${firstName} ${lastName} is a ${age} year old ${job} who lives in ${city}`
        require('../solution')
        expect(consoleSpy).toHaveBeenCalledWith(sentence);
    })
})