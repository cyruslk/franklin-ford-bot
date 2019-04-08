const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
var fs = require('fs');
const textFiles = 'textFiles';
const axios = require("axios");
var config = require('./config.js');

const spreadsheetURL = config.preFix+config.sheetID+config.postFix;

function runTheBot(){
  axios.get(spreadsheetURL)
    .then(function (response) {

      let arrayOfData = response.data.feed.entry;
      let length = arrayOfData.length;
      let randomItem = arrayOfData[Math.floor(Math.random()*arrayOfData.length)];
      let pickenFile = randomItem.gsx$source.$t;
      let filePath = textFiles + pickenFile;

      // read now
      // text or PDF


    })
    .catch(function (error) {
      console.log(error);
    })

  app.listen(port, () => {
    console.log('listening on port ' + port)
  });
}


runTheBot();
