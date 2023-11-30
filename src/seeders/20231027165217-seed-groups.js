module.exports = {
  up: async (QueryInterface) => {
    const groups = [
      {
        asignature: 'Cálculo I',
        fecha: new Date('2023-11-15T16:30'),
        place: 'Sala k-203',
        limit: 10,
        description: 'Grupo de estudio de cálculo I para estudiantes universitarios.',
        userId: 1, 
        listUsers: [1,2,3,4,5,6],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        asignature: 'Intro. a la Progra.',
        fecha: new Date('2023-11-20T17:30'),
        place: 'Salas CAI',
        limit: 8,
        description: 'Grupo de estudio de introducción a la programación para principiantes.',
        userId: 2,
        listUsers: [2,4,5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        asignature: 'Física Moderna',
        fecha: new Date('2023-11-22T14:00'),
        place: 'Laboratorio Físico',
        limit: 6,
        description: 'Discusión de conceptos avanzados en física moderna.',
        userId: 3,
        listUsers: [1,3,5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        asignature: 'Literatura Comparada',
        fecha: new Date('2023-11-25T12:00'),
        place: 'Biblioteca Central',
        limit: 12,
        description: 'Análisis de obras literarias de diferentes culturas.',
        userId: 4,
        listUsers: [2,3,4,6],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        asignature: 'Química Orgánica',
        fecha: new Date('2023-11-30T18:00'),
        place: 'Sala Q-101',
        limit: 15,
        description: 'Estudio grupal sobre estructuras y reacciones químicas orgánicas.',
        userId: 5,
        listUsers: [1,4,5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        asignature: 'Microeconomía',
        fecha: new Date('2023-12-05T16:00'),
        place: 'Aula Magna',
        limit: 20,
        description: 'Repaso de principios de microeconomía para examen final.',
        userId: 6,
        listUsers: [1,2,3,4,5,6],
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        asignature: 'Cálculo III',
        fecha: new Date('2023-11-15T16:30'),
        place: 'Sala k-303',
        limit: 10,
        description: 'Grupo de estudio de cálculo III.',
        userId: 1, 
        listUsers: [1],
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await QueryInterface.bulkInsert('Groups', groups);
  },
  down: (QueryInterface) => QueryInterface.bulkDelete('Groups', null, {})
};