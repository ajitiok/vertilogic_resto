'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Restaurant.hasMany(models.Product, { foreignKey : 'restoId'})
    }
  };
  Restaurant.init({
    Name: {
      type: DataTypes.STRING,
      validate : {
        customValidator(value) {
          if ( value.length > 128 ) {
            throw new Error("name should be less than 128 characters")
          }
        },
        notEmpty : {
          args : true,
          msg : 'Name is required'
        },
        len : [2,128]
      }
    },
    alamat: {
      type : DataTypes.TEXT,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Alamat is required'
        }
      }
    },
    noTelp: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'No Telp is required'
        }
      }
    },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};