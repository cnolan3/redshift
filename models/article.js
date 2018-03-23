'use strict';
module.exports = (sequelize, DataTypes) => {
  var article = sequelize.define('articles', {
    category: DataTypes.ENUM('Weekly Update', 'Space News'),
    title: DataTypes.STRING,
    data: DataTypes.STRING,
    author: DataTypes.STRING,
    body: DataTypes.TEXT,
    photo: DataTypes.STRING
  }, {});
  article.associate = function(models) {
    // associations can be defined here
  };
  return article;
};

