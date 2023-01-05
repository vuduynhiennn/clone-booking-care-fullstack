const express = require('express')
const { getHomePage, getAboutPage, createUser, getuser, testOk } = require('../controllers/HomeController.js')
const router = express.Router()

let initWebRoutes = (app) => {
	router.get('/', (req, res) => {
		return res.send("hello world with eric")
	})
	router.get('/about', getHomePage)
	router.post('/createuser', createUser)
	router.get('/getuser', getuser)
	router.get('/test', testOk)
	return app.use("/", router)
}

module.exports = initWebRoutes