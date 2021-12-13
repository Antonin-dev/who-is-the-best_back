const getQuestions= require("./method");
const questions = require("./data")

test('length array questions', () => {
    it("length questions is valid", () => {
        expect(getQuestions.length).toBe(questions.length);
    })

});
