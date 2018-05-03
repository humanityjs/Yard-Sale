'use strict';
module.exports = function(sequelize, DataTypes) {
  var OrderItems = sequelize.define('OrderItems', {
    userId: DataTypes.INTEGER,
    product: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    yardsaleId: DataTypes.INTEGER,
    cost: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        OrderItems.belongsTo(models.YardSale, {
          foreignkey: 'yardsaleId',
          onDelete: 'CASCADE'
        });
        OrderItems.belongsTo(models.User, {
          foreignkey: 'userId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return OrderItems;
};