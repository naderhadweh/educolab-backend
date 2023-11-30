const supertest = require('supertest');

const app = require('../app'); // La ruta relativa puede variar dependiendo de la estructura del proyecto.
const request = supertest(app.callback());

beforeAll(async () => {
  await app.context.orm.sequelize.authenticate();
});

afterAll(async () => {
  await app.context.orm.sequelize.close();
});

describe('User API routes', () => {
  beforeAll(async () => {
  
  });
  
  describe('POST /users', () => {
    beforeAll(async () => {
  
    });
  });
});