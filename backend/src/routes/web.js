const express = require('express')
const { getHomePage, getAboutPage } = require('../controllers/HomeController.js')
const router = express.Router()

let initWebRoutes = (app) => {
	router.get('/', (req, res) => {
		return res.send("hello world with eric")
	})
	router.get('/about', getHomePage)
	router.get('/crud', getCRUD)
	return app.use("/", router)
}

module.exports = initWebRoutes