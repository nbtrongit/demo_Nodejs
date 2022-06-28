const http = require('http');

const server = http.createServer(function(request, response){
	//URL: / => return helloworld
	//URL: /html => return html
	//URL: /json => return JSON
	//URL: => 404 => not found
	switch(request.url){
		case '/':
			response.end('Hello World');
			break;
		case '/html':
			//quy đinh header Content-type':'text/html trả về kiểu dữ liệu gì
			response.writeHead(200, {'Content-type':'text/html'});
			response.write(`<!DOCTYPE html>\
			<html>\
				<head><title>Demo Nodejs</title></head>\
				<body>\
					<h2>Welcome demo nodejs</h2>\
					<img src="https://nodejs.org/static/images/logo.svg">\
				</body>
			</html>`);
			//response.end() kết thúc quá trình server trả dữ liệu về cho client
			response.end();
			break;
		case '/json':
			let json = {
				name: 'hello',
				age: '8'
			};
			response.writeHead(200, {'Content-type':'application/json'});
			response.end(json.stringify);
			break;
		default:
			response.writeHead(404, {'Content-type':'text/plain'});
			response.end('Sorry, request not found');
	}
});

server.listen(8081, function(){
	console.log('HTTP Server is listening on port 8081...');
});