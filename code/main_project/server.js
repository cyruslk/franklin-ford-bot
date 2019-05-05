const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const fs = require('fs');
const axios = require("axios");
const { CommentStream } = require("snoostorm");
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');
var config = require('./config.js');


const r = new Snoowrap({
    userAgent: 'franklin_ford',
    clientId: config.reddit_client_id,
    clientSecret: config.reddit_client_secret,
    username: config.reddit_username,
    password: config.reddit_password
});

const stream = new CommentStream(r, { subreddit: "all", results: 25 });

  app.listen(port, () => {
    console.log('listening on port ' + port)
  });
