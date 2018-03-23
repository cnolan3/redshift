'use strict';
module.exports = (sequelize, DataTypes) => {
  var stat = sequelize.define('stats', {
    users: DataTypes.INTEGER,
    images: DataTypes.INTEGER,
    confirmed: DataTypes.INTEGER,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {});
  stat.associate = function(models) {
    // associations can be defined here
  };
  return stat;
};
