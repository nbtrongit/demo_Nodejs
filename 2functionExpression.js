//khai báo hàm
function say(message){
    console.log('Say '+ message);
}
say('Hi');

//khai báo function expression
var say1 = function(message){
    console.log(`Say ${message}`);
};
say1('Hi');

function callFunction(func, message){
    func(message);
}//callback truyền kết quả của hàm vào 1 hàm khác
callFunction(say, 'Hi');
callFunction(say1, 'Hi');

function myFunction(x, y, callback){
    let result = x * y;
    callback(result);
}
myFunction(1, 2, say);