'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Customer, { foreignKey: "CustomerId"})
      Order.belongsTo(models.Product, { foreignKey: "ProductId"})
    }
  };
  Order.init({
    CustomerId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    quantity: {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Quantity is required'
        }
      }
    },
    request: DataTypes.TEXT,
    pickup: {
      type : DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
