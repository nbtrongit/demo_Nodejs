const express = require('express');
const app = express();

/*
app.get('/', function(req, res){
  res.send("hello world");
});
*/
app.use(express.static(__dirname + "/14public"));
app.use('/css', express.static(__dirname +"/node_modules/bootstrap/dist/css"));
app.use('/js', express.static(__dirname +"/node_modules/bootstrap/dist/js"));
app.use('/js', express.static(__dirname +"/node_modules/jquery/dist"));
app.use('/js', express.static(__dirname +"/node_modules/popper.js/dist"));


/*
app.get('/test.html', function(req, res){
  res.sendFile(__dirname + '/14public/test.html');
});
app.get('/images/nodejs.png', function(req, res){
  res.sendFile(__dirname + '/14public/images/nodejs.png');
});
app.get('/images/expressjs.png', function(req, res){
  res.sendFile(__dirname + '/14public/images/expressjs.png');
});
*/

app.listen(5000, function(err){
  if(err){
    console.log('Error in server setup');
  }
  else{
    console.log('Server is listening on port 5000...');
  }
});