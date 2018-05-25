'use strict';
module.exports = (sequelize, DataTypes) => {
  var lightCurveSet = sequelize.define('lightCurveSets', {

  }, {});
  lightCurveSet.associate = function(models) {
    lightCurveSet.belongsTo(models.stars);
    lightCurveSet.hasMany(models.lightCurvePoints);
  };
  return lightCurveSet;
};
