const express = require('express');
const app = express();

let today = function(){
  let date = new Date();
  //định dạng localestring theo kiểu en-uS
  return date.toLocaleString('en-US');
};

let formatDate = function(date){
  let template = `<h2 style="color:red">${date.toLocaleString('en-US')}</h2>`;
  return template
};

let hbs = require('express-handlebars');

app.engine('hbs', hbs.engine({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: __dirname + "/views/layouts",
  partialsDir: __dirname + "/views/partials",
  //định nghĩa helpers
  helpers:{
    //today1: today
    today: today,
    formatDate: formatDate
  }
}));

app.set('view engine', 'hbs');

// app.get("/", function(req, res){
//   res.locals.name = "A";
//   res.locals.location = "HCM City";
//   res.render("index");
// });

// app.get("/hello", function(req, res){
//   res.render("index", {name: "B", location: "HCM City"});
// });

// app.get("/test", function(req, res){
//   let context = {
//     // name: "<b>C</b>",
//     // location: '<span style="color:blue">HCM City</span>'
//     name: "<b>C</b>",
//     location: '<span style="color:blue">HCM City</span>',
//     //truyền thêm biến user, có giá trị isLogin
//     user:{
//       isLogin: true,
//       address:{
//         city: "HCMC",
//         street:"227 Nguyễn Văn Cừ"
//       }
//     },
//     languages:["Vietnamese", "English", "Japanese"],
//     links:[
//       {
//         title: 'Home',
//         url: '/'
//       },
//       {
//         title: 'Products',
//         url: '/products'
//       }
//     ]
//   };
//   res.render("index", context);
// });

app.get('/', function(req, res){
  //let today = new Date();
  //res.render('index', {today});
  res.locals.date = "30/07/2022";
  res.render('index');
});

app.listen(5000, function(err){
  if(err){
    console.log('Error in server setup');
  }
  else{
    console.log('Server is listening on port 5000...');
  }
});