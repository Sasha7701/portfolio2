 const exp = require("express");
 const countries = require("../json/countries.json");
 const renderTemplate = require("../util/renderTemplate");
 const router = exp.Router();

 router.get("/country/:word", function(req, res) {

 	const word = req.params.word;
 	renderTemplate(res, "country", "Country", {
 		country: countries[word],
 		// reply: reply,
 	});

 });


 module.exports = router;