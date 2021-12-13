const express = require('express');
const getQuestions = require("./method");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/questionsList', (req, res) => {
    res.send(getQuestions);
})

app.post('/question', (req, res) => {
    res.send(getQuestions[req.body.id])
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
