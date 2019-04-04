const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
var fs = require('fs');
const axios = require("axios");


let data;

axios.get('http://api.open-notify.org/iss-now.json')
  .then(function (response) {
    data = response;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

app.listen(port, () => {
  console.log('listening on port ' + port)
});
