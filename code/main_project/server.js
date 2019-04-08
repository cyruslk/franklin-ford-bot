const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
var fs = require('fs');
const axios = require("axios");
var config = require('./config.js');

const spreadsheetURL = config.preFix+config.sheetID+config.postFix;

function runTheBot(){
  axios.get(spreadsheetURL)
    .then(function (response) {

      let arrayOfData = response.data.feed.entry;
      let length = arrayOfData.length;
      let randomItem = arrayOfData[Math.floor(Math.random()*arrayOfData.length)];

      let randomItemFormatted = {
        date: randomItem.gsx$name.$t,
        physicalLocation: randomItem.gsx$physicallocation.$t,
        date: randomItem.gsx$date.$t,
        note: randomItem.gsx$note.$t,
        homeOfficeTravel: randomItem.gsx$homeofficetravel.$t
      }

      let pickenFile = randomItem.gsx$source.$t;
      let filePath = `textFiles/${pickenFile}.txt`;

      fs.readFile(filePath, function read(err, data) {
        if(err){
          console.log("show the err here", err);
        }else{
          let stringsArray = data.toString('utf8').split(".");
          let randomString = stringsArray[Math.floor(Math.random()*stringsArray.length)];

          console.log(randomString);
          console.log(pickenFile);
          console.log(randomItemFormatted);

        }
      })


    })
    .catch(function (error) {
      console.log(error);
    })

  app.listen(port, () => {
    console.log('listening on port ' + port)
  });
}


runTheBot();
