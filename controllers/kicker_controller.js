const db = require("../models");
module.exports = function(app) {
	// app.get("/", function(req, res) {
	// 		res.render("kicker");
	// })
	app.get("/api/kickers", function(req, res) {
		db.Kicker.findAll({
			include: [db.assesTable]
		}).then(function(dbKickers) {
			res.json(dbKickers);
		});
	});
	app.post("/api/kickers", function(req, res) {
		console.log(req.body);

		db.Kicker.create(req.body).then(function(dbKickers) {
			res.json(dbKickers);
		});
	});
}

