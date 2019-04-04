const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
var fs = require('fs');
const axios = require("axios");
var config = require('./config.js');

const spreadsheetURL = config.preFix+config.sheetID+config.postFix;

axios.get(spreadsheetURL)
  .then(function (response) {
    // console.log(response.data.feed.entry);
    // Then here, get a random element of the data.
    // Once a random element will be picked, run the OCR and go pick a random string.
    // Then, Tweet it
    // Then, send it to the Client? Using Socket? Using a simple server setup
  })
  .catch(function (error) {
    console.log(error);
  })

app.listen(port, () => {
  console.log('listening on port ' + port)
});
