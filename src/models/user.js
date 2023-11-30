'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-zA-Z\u00C0-\u00FF\s]+$/, // Expresión regular que permite letras con y sin tilde
          msg: 'El campo debe contener solo letras'
        }
      },
    },
    career: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'mail must have email format'
        }
      },
    },  
    likes: DataTypes.INTEGER,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};