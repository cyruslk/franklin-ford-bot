const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const fs = require('fs');
const axios = require("axios");
var Snooper = require('reddit-snooper')
var config = require('./config.js');

snooper = new Snooper(
        {
            username: config.reddit_username,
            password: config.reddit_password,
            app_id: config.reddit_client_id,
            api_secret: config.reddit_client_secret,
            user_agent: 'franklin_ford',

            automatic_retries: true, // automatically handles condition when reddit says 'you are doing this too much'
            api_requests_per_minute: 60 // api requests will be spread out in order to play nicely with Reddit
        })


  snooper.watcher.getPostWatcher("all") // blank argument or 'all' looks at the entire website
      .on('post', function(post) {
          console.log('post was posted by: ' + post.data.author)
          console.log(post)
      })
      .on('error', console.error)

  app.listen(port, () => {
    console.log('listening on port ' + port)
  });
