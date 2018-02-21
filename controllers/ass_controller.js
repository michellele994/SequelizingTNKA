const db = require("../models");
module.exports = function(app) {
	app.get("/letskickass", function(req, res) {
		db.assesTable.findAll({}).then(function(dbAsses) {
			const hbsObject = {
				assesTable: dbAsses
			};
			res.render("index",hbsObject);
		});
	})
	app.get("/api/asses", function(req, res) {
		db.assesTable.findAll({
			include: [db.Kicker]
		}).then(function(dbAsses) {
			res.json(dbAsses);
		});
	});
	app.post("/api/asses", function(req, res) {
		console.log(req.body);

		db.assesTable.create({
			ass_name: req.body.ass_name,
			ass_picture: req.body.ass_picture,
			ass_kicked: req.body.ass_kicked
		}).then(function(dbAsses) {
			res.json(dbAsses);
		});
	});
	app.put("/api/asses/:id", function(req, res) {
		db.assesTable.update({
			ass_kicked: req.body.ass_kicked
		},
		{
			where: {
				id: req.params.id
			}
		}).then(function(dbAsses) {
			res.json(dbAsses);
		});
	});
}

