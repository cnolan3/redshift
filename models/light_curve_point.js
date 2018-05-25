'use strict';
module.exports = (sequelize, DataTypes) => {
  var lightCurvePoint = sequelize.define('lightCurvePoints', {
    time: DataTypes.FLOAT,
    value: DataTypes.DOUBLE,
    transit: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});
  lightCurvePoint.associate = function(models) {
  };
  return lightCurvePoint;
};
