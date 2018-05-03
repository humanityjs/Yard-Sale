'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "user"
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.OrderItems, {
          foreignKey: 'userId',
          as: 'orderedItems',
        });
      }
    }
  });
  return User;
};