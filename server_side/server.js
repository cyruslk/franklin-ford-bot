const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
var natural = require('natural');
var tokenizer = new natural.WordTokenizer();
const path = require("path");
const timestamp = require('time-stamp');
const fs = require('fs');
// const https = require('https');
var Twit = require('twit');
const axios = require("axios");
var config = require('./config.js');
const spreadsheetURL = config.preFix+config.sheetID+config.postFix;
const {MongoClient} = require("mongodb");
const connectionURL = config.mongoConnectionURL;
const databaseName = config.mongoDatabaseName;


const BitlyClient = require('bitly').BitlyClient;
const bitly = new BitlyClient(config.bitlyAPI);


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


var T = new Twit({
  consumer_key:         config.twitter_consumer_key,
  consumer_secret:      config.twitter_consumer_secret,
  access_token:         config.twitter_access_token,
  access_token_secret:  config.twitter_access_token_secret,
})


 let runTheBot = () => {
  let dataObj = {};
  let sourceFilesCounter = {};

  // here, map through all the titles and then update the counter of the one picked.

  axios.get(spreadsheetURL)
    .then((response) => {


     let arrayOfData = response.data.feed.entry;
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
     let filePath =  path.join(__dirname, "textFiles", pickenFile);

     // Read the file
     fs.readFile(filePath, function read(err, data) {
      if(err){
        console.log(err);
      }else{
        // use the tokenizer to split the text efficiently;
        tokenizer = new natural.SentenceTokenizer();
        let textToTokenize = tokenizer.tokenize(data.toString('utf8').replace(/\0/g, ''));
        dataObj.randomItemFormatted = randomItemFormatted;
        return returnSpecificString(dataObj, textToTokenize);
      }
   });
 })}

  // Add a randomly selected (from the text) string to the dataObj {}
  let returnSpecificString = (dataObj, textToTokenize) => {
    if(dataObj === undefined){
      return runTheBot();
    }
    let randomString = textToTokenize[Math.floor(
      Math.random()*textToTokenize.length
    )];
    if(randomString.length < 30 || randomString.includes("�")){
      return runTheBot();
    }else{
      dataObj.randomString = randomString.replace(/(\r\n|\n|\r)/gm, "");
    }
    // see if tweet is a duplicate of the endpoint's list
    T.get('statuses/user_timeline',
    {screen_name	: 'franklinfordbot', count: 3200 },
    (err, data, response) => {
      const allTweets = data
      .map((ele, index) => {
        return ele.text.split("https")[0]
      })
      if(allTweets.indexOf(dataObj.randomString) > -1){
        return returnSpecificString();
      }else{
        return performTheTwitterPost(dataObj);
      }
   })
  }


  // This where the bot will send to the Twitter API
  let performTheTwitterPost = (dataObj) => {

    let status = dataObj.randomString;
    let titleToAnchorTag = dataObj.randomItemFormatted.source_title;


    let cleaningTheAnchorTag = (stringToClean) => {
      let stringToLowerCase = stringToClean.toLowerCase();
      return stringToLowerCase.split("")
      .map((ele, index) => {
        if(ele === " "){
          return "-"
        }else{
          return ele;
        }
      }).join("");
    }

    let concatenatingLink = `${config.websiteURL}#${cleaningTheAnchorTag(titleToAnchorTag)}`;

    bitly
    .shorten(concatenatingLink)
    .then(function(result) {

    let postbitlyURL = result.url;
    dataObj.bitlyURLOfPost = result.url;


    // T.post('statuses/update', { status: status },
    // function(err, data, response) {
    //   if(err){
    //     console.log(err.message);
    //     return;
    //   }
    //   console.log("Tweet Posted:", timestamp());


    let twitterData = {
      twitter_id: "test",
      twitter_id_str: "test",
      twitter_text: "test",
      twitter_created_at: "test"
    }
    dataObj.twitterData = twitterData;
    return sendToDb(dataObj)
    // })

    })
    .catch(function(error) {
      console.error(error);
    });
  }

  // This is what will be sent to db;

  let sendToDb = (dataObj) => {
    MongoClient.connect(connectionURL, {
      useNewUrlParser: true,
    }, (error, client) => {
      if(error){
        return console.log(error);
      }
      const db = client.db(databaseName);
      db.collection("ford_twitter").insertOne({
        masterData: dataObj
      }, (error, result) => {
        if(error){
          return console.log("unable to insert in the ford_twitter");
        }
        console.log("Data successfully inserted");
      })

      let targetedTitle = dataObj.randomItemFormatted.source_title;
      db.collection("tweets_sources_counter").insertOne({
        targetedTitle: targetedTitle
      }, (error, result) => {
        if(error){
          return console.log("unable to insert in the tweets_sources_counter");
        }
        console.log("Data successfully inserted");
      })
    })
  }

// Add an interval here;
let tweetInterval = Math.round(
  Math.random() * (176400000 - 18000000)
) + 18000000;

setInterval(function() {
  runTheBot()
}, tweetInterval);

// Create the initial call;
runTheBot();


app.listen(port, () => {
  console.log('listening on port ' + port)
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
