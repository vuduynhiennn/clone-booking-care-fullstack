const db = require('../models/index.js');
const CRUDservice = require('../services/CRUDservice.js');
const {createNewUser, getAllUsers, testDb} = require('../services/CRUDservice.js');
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
let createUser = async (req, res) => {
	await createNewUser.createNewUser(req.body);
	return res.send("hello this is form create page")
}
let getuser = async (req, res) => {
	const data = await getAllUsers();
	return res.send(data)
}
let testOk = async (req, res) => {
	const data = await testDb()
	console.log(data)
}

module.exports = {
	getHomePage,
	getAboutPage,
	createUser,
	getuser,
	testOk
}
