const fs =  require('fs');


//tạo folder
fs.mkdirSync('./folder/test');
//xóa folder
fs.rmdirSync('./folder/test');
//xóa 1 file
fs.unlinkSync('./folder/test.txt');
//.readdirSync(url) => trả về 1 chuỗi danh sách các file trong folder
fs.readdirSync('./folder')
    .forEach(function(file){
        fs.unlinkSync(`./folder/${file}`);
        console.log(`Delete ${file}`);
    });