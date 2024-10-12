'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Doctor.belongsTo(models.Hospital, { foreignKey: "hospital" })
      Doctor.hasMany(models.Booking, { foreignKey: "doctor"}) // reference по doctorID
    }
  }
  Doctor.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    experience: DataTypes.INTEGER,
    hospital: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};