const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const fs = require('fs');
var NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1.js');
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');
const axios = require("axios");
var config = require('./config.js');
const spreadsheetURL = config.preFix+config.sheetID+config.postFix;


// ibm thing
var nlu = new NaturalLanguageUnderstandingV1({
    url: config.watson_app_url,
    version: '2018-04-05',
    iam_apikey: config.iam_apikey,
    iam_url: "https://iam.bluemix.net/identity/token"
});

// reddit thing
const r = new Snoowrap({
    userAgent: 'franklin_ford',
    clientId: config.reddit_client_id,
    clientSecret: config.reddit_client_secret,
    username: config.reddit_username,
    password: config.reddit_password
});
const client = new Snoostorm(r);

const streamOpts = {
    subreddit: 'all',
    results: 1
};

const comments = client.CommentStream(streamOpts);


 runTheBot = () => {
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

          returnSpecificString = () => {
            const randomString = stringsArray[Math.floor(Math.random()*stringsArray.length)];
            if(randomString.length < 40){
              return returnSpecificString()
            }else{
              return randomString;
            }
          }

          let selectedString = returnSpecificString();

          nlu.analyze(
            {
              html: selectedString,
              features: {
                concepts: {},
                keywords: {}
              }
            },
            function(err, response) {
              if (err) {
                console.log('error:', err);
              } else {
                const IBMredictionKeywords = response.concepts.map((ele, index) => {
                  return ele.text;
                });
                console.log(
                  selectedString,
                  IBMredictionKeywords
                );
              }
            }
          );



          // here, twit to the archiving bot; # or no?
          //
          // here, post on reddit? how to target?
          // Go through all the subreddits and see if one matches with a word from the string?
          // Use a NL/ml-thingy (such as watson?) to figure out the meaning of the string, then:
          // Go through all the subreddits and see if one matches with a word from the watson prediction?
          //
          // once it's posted, send it to the client

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
