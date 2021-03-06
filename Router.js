const express = require('express');
const methods = require("./Method/method")

const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.get('/questionsList', (req, res) => {
    res.send(methods.getQuestions);
})

app.post('/question', (req, res) => {
    res.send(methods.getQuestionById(req.body.id))
})

app.get('/rank', (req, res) => {
    res.send(methods.getRank);
})

app.post('/addRank', (req, res) => {
    res.send(methods.addRank(req.body.name, req.body.score))
})

app.listen(port, () => {
    console.log(`Server runs at http://localhost:${port}`);
})
