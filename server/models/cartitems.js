'use strict';
module.exports = function(sequelize, DataTypes) {
  var CartItems = sequelize.define('CartItems', {
    cartId: DataTypes.INTEGER,
    product: DataTypes.STRING,
    requestedQuantity: DataTypes.INTEGER,
    price: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    unassignedQuantity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        CartItems.belongsTo(models.Cart, {
          foriegnKey: 'cartId',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return CartItems;
};