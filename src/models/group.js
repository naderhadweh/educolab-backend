'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Group.init({
    asignature: DataTypes.STRING,
    fecha: DataTypes.STRING,
    place: DataTypes.STRING,
    limit: {
      type:DataTypes.INTEGER,
      validate: {
        max: {
          args: 10,
          msg: 'El valor debe ser menor o igual a 10'
        }
      },
    },
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    listUsers: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};