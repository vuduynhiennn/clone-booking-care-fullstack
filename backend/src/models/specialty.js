'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    static associate(models) {
      // define association here
    }
  };
  Specialty.init({
	description: DataTypes.TEXT,
    image: DataTypes.STRING,
	name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Specialty',
  });
  return Specialty;
};