const express = require("express");

const router = express.Router();

const ass = require("../models/ass.js");

//ensure that all in database is being displayed
router.get("/", function(req, res) {
	ass.all(function(data) {
		const hbsObject = {
			asses: data
		};
		console.log(hbsObject)
		res.render("index", hbsObject)
	})
});
router.post("/api/asses", function(req, res) {
	ass.create(["ass_name", "ass_picture", "ass_kicked"], [req.body.ass_name, req.body.ass_picture, req.body.ass_kicked], function(result) {
		res.json({ id: result.insertId});
	});
});
//When new data is being placed into database
router.put("/api/asses/:id", function(req, res) {
	const condition = "id = " + req.params.id;

	console.log("condition", condition);

	ass.update(
	{
		ass_kicked: req.body.ass_kicked
	},
	condition,
	function(result)
	{
		if (result.changedRows === 0) {
			return res.status(404).end();
		}
		res.status(200).end();
	})
})
module.exports = router;