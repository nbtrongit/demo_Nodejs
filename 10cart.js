const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.send("View cart");
});

router.get('/checkout', function(req, res){
  res.send("Checkout");
});

module.exports = router;