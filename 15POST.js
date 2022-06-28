const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));


const bodyParser = require('body-parser');

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

app.post('/process', function(req, res){
  console.log(req.body);
  res.send("Hello " + req.body.name);
});


app.listen(5000, function(err){
  if(err){
    console.log('Error in server setup');
  }
  else{
    console.log('Server is listening on port 5000...');
  }
});