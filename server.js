const express = require('express');
const snoowrap = require('snoowrap');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const path = require("path")
const fs = require('fs');
var Twit = require('twit')
var NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1.js');
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


 const runTheBot = () => {

   let dataObj = {};
  axios.get(spreadsheetURL)
    .then((response) => {
     let arrayOfData = [
       response.data.feed.entry[5],
       response.data.feed.entry[1],
       response.data.feed.entry[4]
     ]
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
     }
     let pickenFile = randomItemFormatted.source_filenametxt;
     let filePath = `textFiles/${pickenFile}`;



     fs.readFile(filePath, function read(err, data) {
       if(err){
         // let's try this?
         runTheBot();
       }else{
         let stringsArray = data.toString('utf8').split(".");
         dataObj.randomItemFormatted = randomItemFormatted;
         dataObj.stringsArray = stringsArray;
         return returnSpecificString(dataObj);
       }
    });
  })}


 // something to change here
  const returnSpecificString = (dataObj) => {
    if(dataObj === undefined){
      return returnSpecificString()
    }else{
      const randomString = dataObj.stringsArray[Math.floor(
        Math.random()*dataObj.stringsArray.length
      )];
      dataObj.randomString = randomString;
      console.log(dataObj.randomString);
      if(dataObj.randomString.length < 30){
        return returnSpecificString(dataObj);
      }else{
        return performTheTwitterPost(dataObj)
      }
    }
      // setTimeout(() => {
      //   return runNLU(dataObj)},
      //   3000);

  }

   //
   // let runNLU = (dataObj) => {
   //   nlu.analyze(
   //    {
   //      // change this here with the randomString
   //      text: "hello world!",
   //      language: "en",
   //      features: {
   //        concepts: {},
   //        keywords: {}
   //      }
   //    })
   //    .then(result => {
   //      if(result.concepts.length > 0){
   //        const ibmGuess = result.concepts[0].text
   //        dataObj.ibmGuess = ibmGuess;
   //        return performTheSubredditSearch(dataObj);
   //      }else{
   //        return returnSpecificString(dataObj);
   //      }
   //    })
   //    .catch(err => {
   //      console.log('error:', err);
   //    });
   // }
   //
   //
   // const performTheSubredditSearch = (dataObj) => {
   //   let redditEndPoint = `http://www.reddit.com/search.json?q=${dataObj.ibmGuess}`
   //     axios.get(redditEndPoint)
   //     .then((response) => {
   //       let listOfSubreddits = response.data.data.children;
   //       var randomSubredditData = listOfSubreddits[Math.floor(
   //         Math.random() * listOfSubreddits.length
   //       )];
   //       dataObj.randomSubredditData = randomSubredditData;
   //       return performTheRedditPost(dataObj)
   //     })
   //     .catch(err => {
   //       console.log('error:', err);
   //     })
   //  }
   //
   // const performTheRedditPost = (dataObj) => {
   //   let targettedSubreddit = dataObj.randomSubredditData.data.subreddit;
   //   redditScript
   //   .getSubreddit(targettedSubreddit)
   //   .submitSelfpost({title: 'yes', text: dataObj.randomItemFormatted})
   //   .then(console.log("performTheRedditPost: done"))
   //   .then(getTheInfoFromTheRedditPost(dataObj))
   //   .catch(err => {
   //     console.log('error:', err);
   //   })
   // }
   //
   // const getTheInfoFromTheRedditPost = (dataObj) => {
   //   setTimeout(() => {
   //     axios.get(redditProfileEndPoint)
   //     .then((response) => {
   //       let lastRedditPostData = response.data.data.children[0];
   //       dataObj.lastRedditPostData = lastRedditPostData;
   //       return performTheTwitterPost(dataObj);
   //     })
   //   },3000);
   // }

  const performTheTwitterPost = (dataObj) => {
    console.log(dataObj);
    T.post('statuses/update', { status: dataObj.randomString }, function(err, data, response) {
      if(err){
        console.log(err);
      }
      console.log("tweeted");
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

  const sendToDb = (dataToInsert) => {
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
        // console.log(result.ops);
        // console.log(result.insertedCount);
      })
    })
  }


  app.get('/main-data', (req, res) => {
      MongoClient.connect(connectionURL, {
        useNewUrlParser: true,
      }, (error, client) => {
        if(error){
          return console.log("Unable to connect to the db.");
        }
        const db = client.db(databaseName);

          db.collection("metadata_from_bot")
          .find()
          .toArray((error, data) => {
            console.log(data);
            res.json(data);
          });
      })
  })

  setInterval(
    runTheBot,
    Math.floor(
      Math.random() * (5000 - 10000 + 1)
    ) + 5000
  );

  app.listen(port, () => {
    console.log('listening on port ' + port)
  })


  if(process.env.NODE_ENV === 'production'){
      app.use(express.static('client/build'));
  }
  app.get('*',(req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });