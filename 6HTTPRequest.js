const http = require('http');

const server = http.createServer(function(request, response){
	//show request
	console.log(request.url);
	console.log(request.method);
	//headers là thông tin dạng object
	console.log(request.headers);
	
	if(request.method == "POST")
	{
		let body = "";
		//.on => lấy dữ liệu phần body với method là post, bắt các gói tin của request với event là "data"
		request.on("data", function(data){
			body += data;
		});
		
		//event "end" khi nhận request thành công (đầy đử các gói tin)
		request.on("end",function(){
			console.log(body);
		});
	}
});

server.listen(8081, function(){
	console.log('HTTP Server is listening on port 8081...');
});