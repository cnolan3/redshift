'use strict';
module.exports = (sequelize, DataTypes) => {
  var star = sequelize.define('stars', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  }, {});
  star.associate = function(models) {
  };
  return star;
};
