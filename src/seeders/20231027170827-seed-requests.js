const { QueryInterface } = require('sequelize');

module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert('Requests', [
    {
      groupId:1,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      groupId:4,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },  
    {
      groupId:5,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },  
    {
      groupId:5,
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      groupId:7,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      groupId:7,
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },  
    {
      groupId:7,
      userId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },  
    {
      groupId:7,
      userId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },  
  ]),
  down: (QueryInterface) => QueryInterface.bulkDelete('Requests', null, {}),

};