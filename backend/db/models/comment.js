'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    userName: DataTypes.STRING,
    songId: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Song, { foreignKey: "songId"})
    Comment.belongsTo(models.User, { foreignKey: "userId"})
  };
  return Comment;
};