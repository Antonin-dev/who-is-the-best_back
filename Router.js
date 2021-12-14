const express = require('express');
const methods = require("./Method/method")


const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/questionsList', (req, res) => {
    res.send(methods.getQuestions);
})

app.post('/question', (req, res) => {
    res.send(methods.getQuestionById(req.body.id))
})

app.get('/rank', (req, res) => {
    res.send(methods.getRank);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
