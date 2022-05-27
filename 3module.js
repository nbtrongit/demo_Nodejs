/*var add = function(x, y){
    return x + y;
};

module.exports = add; //xuất 1 function ra bên ngoài


var add1 = function(x, y){
    return x + y;
};
var pi = 3.142;

module.exports.pi = pi;
module.exports.add = add;
//exports nhiều thông tin

module.exports.add = function(x, y){
    return x + y;
}; //exports trực tiếp*/


//kiểu exports phổ biến
var calculator = {
    add : function(x, y){
        return x + y;
    },
    pi : 3.142
};

module.exports = calculator;