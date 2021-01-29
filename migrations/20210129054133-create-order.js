'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CustomerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model : "Customers",
          key : "id"
        }
      },
      ProductId: {
        allowNull : false,
        type: Sequelize.INTEGER,
        references : {
          model : "Products",
          key : "id"
        }
      },
      quantity: {
        allowNull : false,
        type: Sequelize.INTEGER
      },
      request: {
        type: Sequelize.TEXT
      },
      pickup: {
        allowNull : false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down:  (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};



