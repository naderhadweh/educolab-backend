const bcrypt = require('bcrypt');

module.exports = {
  up: async (QueryInterface) => {
    const saltRounds = 10;
    const users = [
      {
        name: 'Nader Hadweh Aboid',
        career: 'Ingeniería UC',
        phone: '999310423',
        password: 'nader',
        email: 'nader.hadweh@uc.cl',
        likes: 1,
        photo: 'foto',
      },
      {
        name: 'Franco Bardi',
        career: 'Ingeniería UC',
        phone: '936206382',
        password: 'franc',
        email: 'franco.bardi@uc.cl',
        likes: 1,
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
        likes: 2,
        photo: 'foto',
        createdAt: new Date(),
        updatedAt:new Date(),
      },
      {
        name: 'Matías Murata',
        career: 'Kinesiología UC',
        phone: '459348503954',
        password: 'matias',
        email: 'mati.murata@uc.cl',
        likes: 1,
        photo: 'foto',
        createdAt: new Date(),
        updatedAt:new Date(),
      },
      {
        name: 'Daniela Cristi',
        career: 'Ingeniería UC',
        phone: '34934034',
        password: 'daniela',
        email: 'dani.cristi@uc.cl',
        likes: 1,
        photo: 'foto',
        createdAt: new Date(),
        updatedAt:new Date(),
      },
      {
        name: 'Vicente Romero',
        career: 'Ginecología UC',
        phone: '3842934234',
        password: 'vicho',
        email: 'vicho.romero@uc.cl',
        likes: 0,
        photo: 'foto',
        createdAt: new Date(),
        updatedAt:new Date(),
      },
      {
        name: 'Vicente Ezquerra',
        career: 'Arquitectura UC',
        phone: '342235543',
        password: 'vicho',
        email: 'vicho.ezquerra@uc.cl',
        likes: 0,
        photo: 'foto',
        createdAt: new Date(),
        updatedAt:new Date(),
      },{
        name: 'Administrador Educolab',
        career: '-',
        phone: '-',
        password: 'admin',
        email: 'admin@uc.cl',
        likes: 0,
        photo: 'foto',
        createdAt: new Date(),
        updatedAt:new Date(),

      }
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
