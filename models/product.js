'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Restaurant , { foreignKey : 'restoId'})
      
      Product.belongsToMany(models.Customer , {
        through : models.Order,
        foreignKey: "ProductId"
      })

      Product.hasMany(models.Order, { foreignKey : "ProductId"})
    }
  };
  Product.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Name is required'
        }
      }
    },
    description: {
      type : DataTypes.TEXT,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Description is required'
        }
      }
    },
    price: {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Price is required'
        }
      }
    },
    halal: {
      type : DataTypes.BOOLEAN,
      defaultValue : true
    },
    restoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};