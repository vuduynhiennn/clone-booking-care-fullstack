'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
	return queryInterface.bulkInsert('Users', [{
		password: 'Vuduy@nhien26', 
		email: 'nhienduyvu@gmail.com',
		firstName: 'Vu',
		lastName: 'Nhien',
		address: 'Nam Dinh',
		gender: 1,
		typeRole: 'ROLE',
		keyRole: 'R1',
		createdAt: new Date(),
		updatedAt: new Date()
	}])
  },

  down: async (queryInterface, Sequelize) => {

  }
};
