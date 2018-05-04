'use strict';
module.exports = function(sequelize, DataTypes) {
  var YardSale = sequelize.define('YardSale', {
    title: DataTypes.STRING,
    startdate: DataTypes.DATE,
    saleDate: DataTypes.DATE,
    note: DataTypes.STRING,
    location: DataTypes.STRING,
    rating: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        YardSale.hasMany(models.Product, {
          foreignKey: 'yardsaleId',
          as: 'yardsaleProducts',
        });
        YardSale.hasMany(models.OrderItems, {
          foreignKey: 'yardsaleId',
          as: 'yardsaleCompletedOrders',
        });
      }
    }
  });
  return YardSale;
};