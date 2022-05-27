//https://nodejs.org/dist/latest-v16.x/docs/api/
console.log('World');
console.log(__dirname); //vị trí file
console.log(__filename); //vị trí file + tên file
setTimeout(function(){
    console.log("2s đã qua");
}, 2000); // sau 2000 ms, gọi hàm
setInterval(function(){
    console.log("2s đã qua");
}, 2000); // cứ sau 2000 ms lại gọi hàm

let time = 0;
let timer = setInterval(function(){
    time += 2;
    console.log(`${time} giây đã trôi qua`)
    if(time > 10){
        clearInterval(timer); //dừng hàm interval
    }
}, 2000); //gán hàm vào 1 biến