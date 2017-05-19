const express = require("express");
const router = express.Router();
const renderTemplate = require("../util/renderTemplate");
const exp = require("express");

router.get("/", function(req, res) {
	renderTemplate(res, "about", "homepage", {
		picture: "/images/image1.jpg",
	});
});

router.get("/about", function(req, res) {
	renderTemplate(res, "about", "About", {
		picture: "/images/image1.jpg",
	});
});

router.get("/portfolio", function(req, res) {
	renderTemplate(res, "portfolio", "Portfolio", {
		picture: "/images/image1.jpg",

	});
});



module.exports = router;