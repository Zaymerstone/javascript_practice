'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Hospital.hasMany(models.Doctor, { foreignKey: "hospital" }) //referencится по hospitalID
    }
  }
  Hospital.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hospital',
  });
  return Hospital;
};