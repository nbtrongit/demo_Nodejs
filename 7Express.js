const express = require('express');
const app = express();

//truy xuất đường dẫn gốc
app.get('/', function(req, res){
  res.send("Hello World");
});

//truy xuất đường dẫn json
app.get('/json', function(rep, res){
  let json = {
    name:'World',
    age:8
  };
  //res.send(json); như nhau
  res.json(json);
});

app.get('/html', function(req, res){
  res.sendFile(__dirname + '/9test.html');
});

app.listen(5000, function(err){
  if(err){
    console.log('Error in server setup');
  }
  else{
    console.log('Server is listening on port 5000...');
  }
});