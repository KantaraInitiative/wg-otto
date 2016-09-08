/**************************** Initialization ****************************/
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser')
var jsonSignature = path.join(__dirname, './jsonSignature.js');
var dataset = path.join(__dirname, './dataset.json');
var settings = require('./config/settings');


/****************Setting Middle ware to fetch the data ********************/
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

function generateUUID() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};
// Setting the ejs view engine
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
      res.render('index');
});

app.post('/process_post', function(req, res) {

    var template = req.body.template;
    var counter = req.body.counter;
    var guidIdsrep = req.body.guidIdsrep;

    var guidIdsrepArr = guidIdsrep.split(",");
    var datasetArray = [];

    for (var i = 0; i < counter; i++) {
      var dataTemplate = template;
      // Replacing Guids

      for(var j=0;j<guidIdsrepArr.length;j++)
      {
          if(guidIdsrepArr[j] != null  && guidIdsrepArr[j].trim() != "" )
          {
            var regex = new RegExp(guidIdsrepArr[j], 'g');
            dataTemplate= dataTemplate.replace(regex,generateUUID);
          
          }
      }
      datasetArray.push(JSON.parse(dataTemplate));
    }
    res.json(datasetArray);
});

// Setting Port and starting Server
app.set('port',process.env.PORT || settings.webPort);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
