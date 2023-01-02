const express = require('express')
const initWebRoutes = require('./routes/web.js')
const viewEngine = require('./config/viewEngine.js')
const bodyParser = require('body-parser')
const connectDB = require('./config/connectDB.js')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

viewEngine(app);
initWebRoutes(app);

connectDB()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({	extended: true }))

app.listen(process.env.PORT, (req, res) => console.log('server is running on port', process.env.PORT))
