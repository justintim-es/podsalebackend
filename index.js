const express = require('express');
const app = express();
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
const private = require('./routs/private');
const contract = require('./routs/contract');
app.use('/private', private);
app.use('/contract', contract);
app.listen(3000, () => console.log('kasmdkasmd'))