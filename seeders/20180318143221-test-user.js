'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      username: 'testuser',
      password: '$2a$10$8W0NMFe0S2ff1guhrGt5GeJl91MvMtrv0M2GBdWVZH89rJ2.TYpaW', // testpass
      firstname: 'test',
      lastname: 'tester',
      email: 'test@test.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', [{ username: 'testuser' }], {});
  }
};
