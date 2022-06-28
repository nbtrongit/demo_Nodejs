const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

app.get('/process', function(req, res){
  console.log(req.query);
  res.send("Hello " + req.query.name);
});

app.listen(5000, function(err){
  if(err){
    console.log('Error in server setup');
  }
  else{
    console.log('Server is listening on port 5000...');
  }
});