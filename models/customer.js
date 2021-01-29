'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsToMany(models.Product , {
        through : models.Order,
        foreignKey: "CustomerId"
      })

      Customer.hasMany(models.Order, { foreignKey : "CustomerId"})
    }
  };
  Customer.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Name is required'
        }
      }
    },
    alamat: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};