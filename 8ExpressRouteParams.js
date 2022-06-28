const express = require('express');
const app = express();

app.get('/products/:id', function(req, res){
  res.send(req.params.id);
});

app.get('/users/:userId/books/:bookId', function(req, res){
  res.send(req.params);
});

app.get('/flights/:from-:to', function(req, res){
  res.send(req.params);
});

app.listen(5000, function(err){
  if(err){
    console.log('Error in server setup');
  }
  else{
    console.log('Server is listening on port 5000...');
  }
});