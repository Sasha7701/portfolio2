 const exp = require("express");
 const countries = require("../json/countries.json");
 const renderTemplate = require("../util/renderTemplate");
 const router = exp.Router();

 router.get("/country", function(req, res) {
 	renderTemplate(res, "country", "Home", {
 		country: countries["USA"],
 	});

 });

 router.get("/country/:code", function(req, res) {
 	const code = req.params.code.toUpperCase();
 	console.log(req.query);
 	if (!countries[code]) {
 		res.status(400).send("Error 400");
 		return;

 	}
 	renderTemplate(res, "country", "Country", {
 		country: countries[code],
 		// reply: reply,
 	});

 });





 module.exports = router;