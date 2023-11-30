'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {

    }
  }
  Review.init({
    content: {
      type:DataTypes.STRING,
      validate:{
        len: {
          args: [0, 100], // mínimo de 0 caracteres y máximo de 100 caracteres
          msg: 'El atributo debe tener una longitud de no más de 100 caracteres'
        }
      },
    },
    like: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    reviewerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};