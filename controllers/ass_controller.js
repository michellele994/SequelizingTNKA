const db = require("../models");
module.exports = function(app) {
	app.get("/", function(req, res) {
		db.assesTable.findAll({
			order: [
				["ass_name", "ASC"]
			]
		}).then(function(dbAsses) {
			const hbsObject = {
				assesTable: dbAsses
			};
			res.render("index",hbsObject);
		});
	})
	app.get("/api/asses", function(req, res) {
		var query = {};
		if (req.query.kicker_id)
		{
			query.KickerId = req.query.kicker_id;
		}
		db.assesTable.findAll({
			where: query,
			include: [db.Kicker]
		}).then(function(dbAsses) {
			res.json(dbAsses);
		});
	});
	app.post("/api/asses", function(req, res) {
		console.log(req.body);

		db.assesTable.create(req.body).then(function(dbAsses) {
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

