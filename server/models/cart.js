'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cart = sequelize.define('Cart', {
    userId: DataTypes.INTEGER,
    yardSaleId: DataTypes.INTEGER,
    expirationDate: DataTypes.DATETIME,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Cart.associate = (models)  => {
    // associations can be defined here
    Cart.hasMany(models.CartItems, {
      foreignKey: 'cartId',
      as: 'cartItems',
    });
    Cart.belongsTo(models.users, {
      foriegnKey: 'userId',
      onDelete: 'CASCADE',
    });

  };
  return Cart;
};