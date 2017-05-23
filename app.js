const express = require("express");
const app = express();
const portfolioRouter = require("./routers/portfolio");
const countryRouter = require("./routers/country")
app.set("view engine", "ejs");

app.use(express.static("assets"));
const countries = require("./json/countries.json");
// console.log(countries);

app.use("/", portfolioRouter);
app.use("/", countryRouter);


app.get("*", function(req, res) {    
res.status(404);
res.render("page404");
// res.send("This is not a valid page, go away!");
});

app.listen(3000, function() {
	console.log("Your answer is available at localhost:3000!");

});