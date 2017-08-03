var dbrequest = require('./routes/dbrequest');
module.exports = function(app) {
	dbrequest(app);
	app.get('/post', function(req, res) {
		res.render('postdebug');
	});
}
