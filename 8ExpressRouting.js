const express = require('express');
//khai báo app = server
const app = express();

//regex ? có ý nghĩa là ký tự b có hay không, không quan trọng => abcd, acd đều thỏa cd cuối
app.get('/ab?cd', function(req, res){
  res.send('/ab?cd');
});
//ab+cd => ký tự b có 1 hoặc nhiều
//ab*cd => đầu là ab và cuối là cd, ở giữa là gì cũng được
//a(bc)?d bắt đầu bằng a, kết bằng d và ở giữa chỉ có bc

app.get('/ab+cd', function(req, res){
  res.send('/ab+cd');
});
app.get('/ab*cd', function(req, res){
  res.send('/ab*cd');
});
//ưu tiên route hợp lệ gần nhất từ trên xuống dưới

//route ab*cd
app.get('/ab([*])cd', function(req, res){
  res.send('/ab([*])cd');
});

app.listen(5000, function(err){
  if(err){
    console.log('Error in server setup');
  }
  else{
    console.log('Server is listening on port 5000...');
  }
});