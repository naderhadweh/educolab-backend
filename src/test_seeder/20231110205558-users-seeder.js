const bcrypt = require('bcrypt');

module.exports = {
  up: async (QueryInterface) => {
    const saltRounds = 10;
    const users = [
      {
        name: 'nader',
        career: 'Ingeniería UC',
        phone: '999310423',
        password: 'nader',
        email: 'nader.hadweh@uc.cl',
        likes: 0,
        photo: 'foto',
      },
      {
        name: 'Franco Bardi',
        career: 'Ingeniería UC',
        phone: '936206382',
        password: 'franc',
        email: 'franco.bardi@uc.cl',
        likes: 0,
        photo: 'foto',
        createdAt: new Date(),
        updatedAt:new Date(),
      },
      {
        name: 'Sebastián Ivanovic',
        career: 'Ingeniería UC',
        phone: '826292836723',
        password: 'sebita',
        email: 'seba.ivanovic@uc.cl',
        likes: 0,
        photo: 'foto',
        createdAt: new Date(),
        updatedAt:new Date(),
      },
    ];

    const hashedUsers = await Promise.all(users.map(async user => {
      const hashedPassword = await bcrypt.hash(user.password, saltRounds);
      return {
        ...user,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }));

    await QueryInterface.bulkInsert('Users', hashedUsers);
  },
  down: (QueryInterface) => QueryInterface.bulkDelete('Users', null, {}),
};