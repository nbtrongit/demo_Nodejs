const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.send("View products list");
});

router.get('/:id', function(req, res){
  res.send("View products " + req.params.id);
});

module.exports = router;