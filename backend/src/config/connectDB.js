const { Sequelize } = require('sequelize');

// // Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('mysql://user:pass@example.com:5432/dbname') // Example for postgres

// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('test', 'ditko', 'Vuduy@nhien26', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

let connectDB = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
		console.log('Happy new Year 2023.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

module.exports = connectDB