//Lắng nghe yêu cầu từ phía người dùng và trả về 1 đoạn text
//Web server chạy trên localhost và lắng nghe ở cổng (port) 8081

//Khai báo HTTP Server xử dụng module có sẵn là http
const http = require('http');

//tạo HTTP Server .createServer(function(request, response){...}) nhận vào tham số là 1 hàm call back, request nhận yêu cầu, response trả yêu cầu
const server = http.createServer(function(request, response){
	//nhận 1 request bất kỳ thì server sẽ trả về 1 đoạn chuỗi, gọi lệnh .end
	response.end("Hello World");
});


//start server .listen(port, function(){...})
server.listen(8081, function(){
	console.log('HTTP Server is listening on port 8081...');
});