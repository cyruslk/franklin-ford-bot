const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const fs = require('fs');
var Twit = require('twit')
var NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1.js');
const axios = require("axios");
var Snooper = require('reddit-snooper')
var config = require('./config.js');
const spreadsheetURL = config.preFix+config.sheetID+config.postFix;

var url = "mongodb://localhost:27017";
var MongoClient = require('mongodb').MongoClient;

var nlu = new NaturalLanguageUnderstandingV1({
    url: config.watson_app_url,
    version: '2018-04-05',
    iam_apikey: config.iam_apikey,
    iam_url: "https://iam.bluemix.net/identity/token"
});

snooper = new Snooper(
{
    username: config.reddit_username,
    password: config.reddit_password,
    app_id: config.reddit_client_id,
    api_secret: config.reddit_client_secret,
    user_agent: 'franklin_ford',
    automatic_retries: true,
    api_requests_per_minute: 60 
}
)


var T = new Twit({
  consumer_key:         config.twitter_consumer_key,
  consumer_secret:      config.twitter_consumer_secret,
  access_token:         config.twitter_access_token,
  access_token_secret:  config.twitter_access_token_secret,
})

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
            (err, response) => {
              if (err) {
                console.log('error:', err);
              } else {
                const IBMPredictions = response.concepts.map((ele, index) => {
                  return ele.text;
                });
                console.log(
                  selectedString,
                  IBMPredictions
                );

                // reddit thing
                snooper.watcher.getPostWatcher("all")
                  .on('post', function(post) {
                      console.log('post was posted by: ' + post.data.author)
                  })
                  .on('error', console.error)
              }
            }
          );
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
