var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var router = require('./router');
var path = require('path')

var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/src'));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/src/index.html'))	;
});
router(app);

// app.use(function(req, res) {
// 	res.status(404).render('404page');
// })

app.listen(config.port, function () {
	console.log("Listening to port " + config.port);
});
