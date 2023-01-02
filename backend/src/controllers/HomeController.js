const db = require('../models')

let getHomePage = async (req, res) => {
	try {
		let data = await db.User.findAll()
		return res.render("homepage.ejs", {
			data: JSON.stringify(data)
		})
	} catch (err) {
		console.log(err)
	}

}

let getAboutPage = (req, res) => {
	return res.send("about page")
}

module.exports = {
	getHomePage,
	getAboutPage
}
