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
// const {MongoClient} = require("mongodb");
// const connectionURL = config.mongoConnectionURL;
// const databaseName = config.mongoDatabaseName;


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
     let filePath =  `textFiles/${pickenFile}`;
     

  // fix this   
  fs.readFileSync(filePath, function read(err, data) {
      if(err){
        console.log(err);
        runTheBot();
      }else{

        // I should be able to access the data here :(        
        console.log(data);
        
        tokenizer = new natural.SentenceTokenizer();
        let textToTokenize = tokenizer.tokenize(data.toString('utf8').replace(/\0/g, ''));
        dataObj.randomItemFormatted = randomItemFormatted;
        dataObj.stringsArray = textToTokenize;
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

    if(randomString.length < 30){
      return runTheBot();
    }else{
      dataObj.randomString = randomString
      .replace(/(\r\n|\n|\r)/gm, "");
    }

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
    })
  }

  // This is what will be sent to db, need this but with less data inserted;
  // let sendToDb = (dataToInsert) => {
  //   MongoClient.connect(connectionURL, {
  //     useNewUrlParser: true,
  //   }, (error, client) => {
  //     if(error){
  //       return console.log("Unable to connect to the db.");
  //     }
  //     const db = client.db(databaseName);

  //     db.collection("metadata_from_bot").insertOne({
  //       masterData: dataToInsert
  //     }, (error, result) => {
  //       if(error){
  //         return console.log("unable to insert users");
  //       }
  //     })
  //   })
  // }


runTheBot();


// Instantiating the server;
app.listen(port, () => {
  console.log('listening on port ' + port)
})

// switching between production and local, for Heroku
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});