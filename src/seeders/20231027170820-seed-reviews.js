module.exports = {
  up: (QueryInterface) => {
    const reviews = [
      {
        content: 'Excelente grupo de estudio, me ayudó mucho con mis tareas de cálculo.',
        like: true,
        userId: 1,
        reviewerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Su grupo de programación es muy desordenado. Costó aprender.',
        like: false,
        userId: 2,
        reviewerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Increíble experiencia, el material proporcionado fue de gran ayuda.',
        like: true,
        userId: 3,
        reviewerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Buenisimo grupo.',
        like: true,
        userId: 3,
        reviewerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'La sesión de estudio fue muy interactiva y productiva.',
        like: true,
        userId: 4,
        reviewerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'El grupo tenía un buen ambiente, pero necesitamos más ejercicios prácticos.',
        like: true,
        userId: 5,
        reviewerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'La metodología de enseñanza no era adecuada para principiantes.',
        like: false,
        userId: 6,
        reviewerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    return QueryInterface.bulkInsert('Reviews', reviews);
  },
  down: (QueryInterface) => {
    return QueryInterface.bulkDelete('Reviews', null, {});
  }
};