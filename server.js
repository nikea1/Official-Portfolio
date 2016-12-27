var express = require('express');
var path = require('path')
// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));


app.get("/about", function(req, res){
	res.sendFile(path.join(__dirname,"/public/html/about.html"))
})

app.get("/contact", function(req, res){
	res.sendFile(path.join(__dirname,"/public/html/contact.html"))
})

app.get("/portfolio", function(req, res){
	res.sendFile(path.join(__dirname,"/public/html/portfolio.html"))
})

app.use("/", function(req, res){
	res.redirect("/about")
})

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("I'm running port: ", port);
});