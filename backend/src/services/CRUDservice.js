const bcrypt = require('bcrypt');
const db = require('../models/index.js')
const createNewUser = async (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const hashPasswordFromBcrypt = await hashUserPassword(data.password)
			await db.User.create({
				email: data.email,
				password: hashPasswordFromBcrypt,
				lastName: data.lastName,
				firstName: data.firstName,
				address: data.address,
				gender: data.gender == "1" ? true : false,
				roleId: data.roleId,
				phoneNumber: data.phoneNumber,
				positionId: data.positionId,
				image: data.image
			})
			console.log("created user")
			resolve('ok it still works')
		} catch (err) {
			reject(err)
		}
	})
}

const getAllUsers = async () => {
	return new Promise(async (resolve, reject) => {
		try {
			const users = await db.User.findAll({
				raw: true
			})
			resolve(users)
		} catch (error) {
			reject(error)
		}
	})
}
const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (password) => {
	return new Promise(async (resolve, reject) => {	
		try {
			const hashPassword = await bcrypt.hashSync(password, salt)
			resolve(hashPassword)			
		} catch (err) {
			reject(e)
		}
	})
}

const testDb = () => {
	return "ok"
}

module.exports = {
	createNewUser: createNewUser,
	getAllUsers,
}