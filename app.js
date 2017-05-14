const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.use(express.static("assets"));

app.get("/", function(req, res) {
	console.log("Serving up homepage...");
	res.render("Personal");
	skills: "Express,"
});




// app.get("/login", function(req, res) {
// 	console.log("Serving up homepage...");
// 	res.render("login");
// });

// app.get("/logout", function(req, res) {
// 	console.log("Serving up homepage...");
// 	res.render("logout");
// });

app.listen(3000, function(){
	console.log("Your answer is available at localhost:3000!");

});