const express = require('express');
const app = express();



app.get('/', function(req, res){
  res.send("hello world");
});

/*app.get('/products', function(req, res){
  res.send("View products list");
});

app.get('/products/:id', function(req, res){
  res.send("View products " + req.params.id);
});*/
let productRouter = require('./13products.js');
app.use('/products', productRouter);

app.get('/carts', function(req, res){
  res.send("View cart");
});

app.get('/carts/checkout', function(req, res){
  res.send("Checkout");
});

app.listen(5000, function(err){
  if(err){
    console.log('Error in server setup');
  }
  else{
    console.log('Server is listening on port 5000...');
  }
});