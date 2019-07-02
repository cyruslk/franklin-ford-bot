const express = require('express');
const snoowrap = require('snoowrap');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const path = require("path");
const timestamp = require('time-stamp');
const fs = require('fs');
const https = require('https');
var Twit = require('twit');
var NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1.js');
var Tokenizer = require('tokenize-text');
var tokenize = new Tokenizer();
const axios = require("axios");
var config = require('./config.js');
const spreadsheetURL = config.preFix+config.sheetID+config.postFix;
const redditProfileEndPoint = `https://www.reddit.com/user/${config.reddit_user_agent}/overview.json`;
const {MongoClient} = require("mongodb");
const connectionURL = config.mongoConnectionURL;
const databaseName = config.mongoDatabaseName;


app.use(express.static(__dirname + '/public'));
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());


var nlu = new NaturalLanguageUnderstandingV1({
    url: "https://gateway.watsonplatform.net/natural-language-understanding/api",
    version: '2018-04-05',
    iam_apikey: config.iam_apikey,
    iam_url: "https://iam.bluemix.net/identity/token",
    language: "en"
});

const redditScript = new snoowrap({
  userAgent: config.reddit_user_agent,
  clientId: config.reddit_client_id,
  clientSecret: config.reddit_client_secret,
  username: config.reddit_username,
  password: config.reddit_password
});

var T = new Twit({
  consumer_key:         config.twitter_consumer_key,
  consumer_secret:      config.twitter_consumer_secret,
  access_token:         config.twitter_access_token,
  access_token_secret:  config.twitter_access_token_secret,
})


 let runTheBot = () => {

  let dataObj = {};

  axios.get(spreadsheetURL)
    .then((response) => {
     let arrayOfData = [
       response.data.feed.entry[5],
       response.data.feed.entry[1],
       response.data.feed.entry[4]
     ];

     let randomItem = arrayOfData[Math.floor(Math.random()*arrayOfData.length)];
     let randomItemFormatted = {
       source_authorname: randomItem.gsx$authorname.$t,
       source_dateyear: randomItem.gsx$dateyear.$t,
       source_fulldateifknown: randomItem.gsx$fulldateifknown.$t,
       source_title: randomItem.gsx$title.$t,
       source_publishedin: randomItem.gsx$publishedin.$t,
       source_pages: randomItem.gsx$pages.$t,
       source_lieu: randomItem.gsx$lieu.$t,
       source_filenamepdf: randomItem.gsx$filenamepdf.$t,
       source_filenametxt: randomItem.gsx$filenametxt.$t,
       source_notes: randomItem.gsx$notes.$t,
       source_manuscrittapuscrit: randomItem.gsx$manuscrittapuscrit.$t
     };


     let pickenFile = randomItemFormatted.source_filenametxt;
     let filePath = `textFiles/${pickenFile}`;

     fs.readFile(filePath, function read(err, data) {
       if(err){
         runTheBot();
       }else{
         // var tokens = tokenize.sections()(data.toString('utf8'));
         // console.log(filePath, "----");
         // console.log(tokens);
         let stringsArray = data.toString('utf8').split(".");
         dataObj.randomItemFormatted = randomItemFormatted;
         dataObj.stringsArray = stringsArray;
         return returnSpecificString(dataObj);
       }
    });
  })}


  let returnSpecificString = (dataObj) => {

    if(dataObj === undefined){
      return runTheBot();
    }

    const randomString = dataObj.stringsArray[Math.floor(
      Math.random()*dataObj.stringsArray.length
    )];

    dataObj.randomString = randomString;

    T.get('statuses/user_timeline',
    {screen_name	: 'a_deschanel', count: 3200 },
    (err, data, response) => {
      const allTweets = data
      .map((ele, index) => {
        return ele.text.split("https")[0]
      })

      if(allTweets.indexOf("dataObj.randomString") > -1){
        return runTheBot();
      }
        return performTheTwitterPost(dataObj);
   })
  }

  let performTheTwitterPost = (dataObj) => {

    let status = dataObj.randomString;

    T.post('statuses/update', { status: status },
    function(err, data, response) {
      if(err){
        console.log(err.message);
        return;
      }
      console.log("Tweet Posted:", timestamp());
      let twitterData = {
        twitter_id: data.id,
        twitter_id_str: data.id_str,
        twitter_text: data.text,
        twitter_created_at: data.created_at
      }
      dataObj.twitterData = twitterData;
      return sendToDb(dataObj)
    })
  }

  let sendToDb = (dataToInsert) => {
    console.log("Sent to DB:", timestamp());
    console.log("----");
    MongoClient.connect(connectionURL, {
      useNewUrlParser: true,
    }, (error, client) => {
      if(error){
        return console.log("Unable to connect to the db.");
      }
      const db = client.db(databaseName);

      db.collection("metadata_from_bot").insertOne({
        masterData: dataToInsert
      }, (error, result) => {
        if(error){
          return console.log("unable to insert users");
        }
      })
    })
  }

  // app.get('/main-data', (req, res) => {
  //     MongoClient.connect(connectionURL, {
  //       useNewUrlParser: true,
  //     }, (error, client) => {
  //       if(error){
  //         return console.log("Unable to connect to the db.");
  //       }
  //       const db = client.db(databaseName);
  //
  //         db.collection("metadata_from_bot")
  //         .find()
  //         .toArray((error, data) => {
  //           console.log(data);
  //           res.json(data);
  //         });
  //     })
  // })

setInterval(runTheBot, 120000)

app.listen(port, () => {
  console.log('listening on port ' + port)
})

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'));
// }
// app.get('*',(req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });
