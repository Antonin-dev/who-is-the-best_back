const questionsData = require("../Data/questionsData")
const methods = require("./method")

describe('test back', () => {
    test('length questions is valid', () => {
            expect(methods.getQuestions.length).toBe(questionsData.length);
    });
    test("find question by id", () => {
        expect(methods.getQuestionById(3)).toMatchObject(questionsData[3]);
        expect(methods.getQuestionById(7)).toBeUndefined();
    });
})
