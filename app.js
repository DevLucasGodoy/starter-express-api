const { response } = require('express');
const express = require('express');
const router = require('./index');
const app = express();

app.use(express.json());
app.use(router);

module.exports = app;
