const express = require('express');
const app = express();

app.use(express.static(__dirname + "/16public"));

let hbs = require('express-handlebars');

//định nghĩa engine tên là hbs
app.engine('hbs', hbs.engine({
  //đuôi các file template
  extname: 'hbs',
  //tên layout chính, layout.hbs
  defaultLayout: 'layout',
  //thư mục chứa file layout chính
  layoutsDir: __dirname + "/views/layouts",
  //layouts con
  partialsDir: __dirname + "/views/partials"
}));

//cấu hình view engine sử dụng hbs
app.set('view engine', 'hbs');

// app.get("/test", function(req, res){
//   res.locals.name = "A";
//   res.locals.location = "HCM City";
//   res.render("index");
// });
app.get("/test", function(req, res){
  let context = {
    name: "A",
    location: "HCM City"
  };
  res.render("index", context);
});

app.listen(5000, function(err){
  if(err){
    console.log('Error in server setup');
  }
  else{
    console.log('Server is listening on port 5000...');
  }
});