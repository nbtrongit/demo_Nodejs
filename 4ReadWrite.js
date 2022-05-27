const fs = require('fs'); //không có được dẫn default lấy trong thư viện cài sẵn
const filePath = __dirname + '/4file.js';

//.readFileSync(url, options)
var contents = fs.readFileSync(filePath, 'utf-8');
//.writeFileSync(url, data)
fs.writeFileSync('./4mycal.js', contents);

console.log(contents);

//.readFile(url, options, funtion(err, contents){...})
//đọc file trả kết quả vào hàm callback 2 tham số err và contents
fs.readFile(filePath, 'utf-8', function(err, contents){
    if(err != null){
        console.log('Lỗi đọc file');
    }
    else{
        console.log(contents);
    }
});
//.readFile(url, data, function(err){...})
fs.writeFile('./4mycal.js', contents, function(err){
    console.log('Ghi file không thành công');
});

//.readFileSync => khi nào chạy xong mới cho phép thực hiện các lệnh dưới
//.readFile => cho phép chạy các lệnh dưới trong khi đang thực hiện


