const { QueryInterface } = require('sequelize');

module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert('Chats', [
    {
      type: 'Estudio',
      content: ['30/11/2023 13:51 - Nader Hadweh Aboid: hola', '30/11/2023 13:52 - Franco Bardi: como tay'],
      groupId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      type: 'Offtopic',
      content: ['30/11/2023 13:58 - Nader Hadweh Aboid: wenaa', '30/11/2023 14:00 - Sebastian Ivanovic: saaabe'],
      groupId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
  ]),
  down: (QueryInterface) => QueryInterface.bulkDelete('Chats', null, {}),

};