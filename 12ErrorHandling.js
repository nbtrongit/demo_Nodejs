const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send("hello world");
});

app.get('/error', function(req, res){
  //biến này chưa khai báo => bắt error bên dưới
  res.send(req.locals.message);
});

//Handle 404 not found
app.use(function(req, res){
  res.status(404).send('Error: Request not Found!');
});

//Internal Server Error 500
app.use(function(error, req, res, next){
  console.log(error);
  res.status(500).send('Error: Internal Server Error!');
});

app.listen(5000, function(err){
  if(err){
    console.log('Error in server setup');
  }
  else{
    console.log('Server is listening on port 5000...');
  }
});