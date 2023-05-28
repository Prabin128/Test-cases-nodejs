//mocha is a JS framework for Nodejs programs, featuring browser support, asynchronous testing, test coverage reports.

//chai is  a BDD/TDD assertion library for node and the browser that can be delightifully paired with any JS testing framework


const express = require('express');
const app = express();

const userRoute = require('./routes/user');


app.use("/user", (req, res) => {
    res.send("hello");
});


module.exports = app;