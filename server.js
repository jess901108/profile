var express = require('express'),
app = express(),
port = process.env.PORT,
path = require('path'),
mongoose = require('mongoose'),
bodyParser = require('body-parser');

mongoose.connect('mongodb://votdb1p:votdb1ppsw@ds028679.mlab.com:28679/votingdb');

app.use(bodyParser.json());

app.set("view engine","ejs");
app.set("views",path.resolve(__dirname,"client","views"));

app.use(express.static(path.resolve(__dirname,"client")));

app.get('/',function(req,res){
  res.render('index.ejs');
});

var api = express.Router();
require('./server/routes/api')(api);
app.use('/api',api);

app.listen(port,function(){
  console.log("server is running on port..."+ port);
})