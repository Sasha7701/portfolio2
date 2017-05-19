 function renderTemplate(res, page, title, pageArg) {
	res.render("template", {
		page: page,
		title: title,
		pageArg: pageArg,
	});
}





module.exports = renderTemplate;