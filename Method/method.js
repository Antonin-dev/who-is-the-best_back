const questionsData = require("../Data/questionsData")
const rankData = require("../Data/rankData");

function getQuestions() {
    return questionsData;
}

function getQuestionById(id){
    return questionsData[id]
}

function getRank(){
    return rankData;
}

module.exports = {
    getQuestions: getQuestions(),
    getQuestionById: (id) => getQuestionById(id),
    getRank: getRank()
};
