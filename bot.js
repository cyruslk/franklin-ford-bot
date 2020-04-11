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
// var config = require('./config.js');
const spreadsheetURL = process.env.preFix+process.env.sheetID+process.env.postFix;
const {MongoClient} = require("mongodb");
const connectionURL = process.env.mongoConnectionURL;
const databaseName = process.env.mongoDatabaseName;


const BitlyClient = require('bitly').BitlyClient;
const bitly = new BitlyClient(process.env.bitlyAPI);


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
  consumer_key:         process.env.twitter_consumer_key,
  consumer_secret:      process.env.twitter_consumer_secret,
  access_token:         process.env.twitter_access_token,
  access_token_secret:  process.env.twitter_access_token_secret,
})


 let runTheBot = () => {
  let dataObj = {};
  let sourceFilesCounter = {};


  axios.get(spreadsheetURL)
    .then((response) => {

     let arrayOfData = response.data.feed.entry;
     let randomItem = arrayOfData[Math.floor(Math.random()*arrayOfData.length)];

     let selectedItem = {
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


     let selectedFile = selectedItem.source_filenametxt;
     let filePath =  path.join(__dirname, "textFiles", selectedFile);

     // Read the file
     fs.readFile(filePath, function read(err, data) {
      if(err){
        console.log(err);
      }else{
        // use the tokenizer to split the text efficiently;
        tokenizer = new natural.SentenceTokenizer();
        let textToTokenize = tokenizer.tokenize(data.toString('utf8').replace(/\0/g, ''));
        dataObj.selectedItem = selectedItem;
        return returnSelectedString(dataObj, textToTokenize);
      }
   });
 })}

  // Add a randomly selected (from the text) string to the dataObj {}
  let returnSelectedString = (dataObj, textToTokenize) => {
    if(dataObj === undefined){
      return runTheBot();
    }
    let selectedString = textToTokenize[Math.floor(
      Math.random()*textToTokenize.length
    )];
    if(selectedString.length < 30 || selectedString.includes("�")){
      return runTheBot();
    }else{
      dataObj.selectedString = selectedString.replace(/(\r\n|\n|\r)/gm, "");
    }
    // see if tweet is a duplicate of the endpoint's list
    T.get('statuses/user_timeline',
    {screen_name	: 'franklinfordbot', count: 3200 },
    (err, data, response) => {
      const allTweets = data
      .map((ele, index) => {
        return ele.text.split("https")[0]
      })
      if(allTweets.indexOf(dataObj.selectedString) > -1){
        return returnSelectedString();
      }else{
        console.log("passed", dataObj);   
        return performTheTwitterPost(dataObj);
      }
   })
  }


  // this is where the bit.ly will be created.
  let generateTheBitly = (websiteURL, stringToClean) => {
    let stringToLowerCase = stringToClean.toLowerCase();
    let stringToURL = stringToLowerCase.split("")
    .map((ele, index) => {
      if(ele === " "){
        return "-"
      }else if(ele === ","){
        return;
      }else if(ele === "''"){
        return;
      }else if(ele === "'"){
        return; 
      }else{
        return ele;
      }
    }).join("");
    return `${process.env.websiteURL}#${stringToURL}`;
  };


  // This where the bot will send to the Twitter API
  let performTheTwitterPost = (dataObj) => {
    let status = dataObj.selectedString;
    let titleToAnchorTag = dataObj.selectedItem.source_title;
    // let concatenatingLink = `${config.websiteURL}#${cleaningTheAnchorTag(titleToAnchorTag)}`;
    let concatenatingLink = generateTheBitly(process.env.websiteURL, titleToAnchorTag);
    
    bitly
    .shorten(concatenatingLink)
    .then(function(result) {

    let postbitlyURL = result.url;
    dataObj.bitly = result.url;

    let statusWithBitly = `${status} ${postbitlyURL}`;

    T.post('statuses/update', { status: statusWithBitly },
    function(err, data, response) {
      if(err){
        console.log(err.message);
        return;
      }
      console.log("Tweet Posted:", timestamp());
    
    let dataOfTheTweet = {
       twitter_id: data.id,
       twitter_id_str: data.id_str,
       twitter_text: data.text,
       twitter_created_at: data.created_at
     }
    dataObj.dataOfTheTweet = dataOfTheTweet;
      return sendToDb(dataObj)
      })
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
        entry: dataObj
      }, (error, result) => {
        if(error){
          return console.log("unable to insert in the ford_twitter");
        }
        console.log("Data successfully inserted");
      })
    })
  }

let tweetInterval = Math.round(
  Math.random() * (176400000 - 18000000)
) + 18000000;

setInterval(function() {
  runTheBot()
}, tweetInterval);

runTheBot();


app.listen(port, () => {
  console.log('listening on port ' + port)
})
