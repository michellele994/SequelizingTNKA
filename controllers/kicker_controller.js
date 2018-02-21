const db = require("../models");
module.exports = function(app) {
	app.get("/", function(req, res) {
			res.render("kicker");
	})
	app.get("/api/kickers", function(req, res) {
		db.Kicker.findAll({}).then(function(dbKickers) {
			res.json(dbKickers);
		});
	});
	app.post("/api/kickers", function(req, res) {
		console.log(req.body);

		db.Kicker.create({
			name: req.body.name,
		}).then(function(dbKickers) {
			res.json(dbKickers);
		});
	});
}

