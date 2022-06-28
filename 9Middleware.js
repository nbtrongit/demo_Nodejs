const express = require('express');
const app = express();

function myMiddleware(req, res, next){
  console.log('middleware 1');
  res.locals.text = '123142';
  //sang hàm middleware kế
  next();
}
app.use(myMiddleware);

app.use(function(req, res, next){
  console.log('middleware 2');
  next();
});

app.get('/', function(req, res){
  res.send("hello world" + res.locals.text);
});

app.listen(5000, function(err){
  if(err){
    console.log('Error in server setup');
  }
  else{
    console.log('Server is listening on port 5000...');
  }
});