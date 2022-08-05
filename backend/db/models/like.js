'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    songId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Like.associate = function (models) {
    // associations can be defined here
    Like.belongsTo(models.Song, { foreignKey: "songId" })
    Like.belongsTo(models.User, { foreignKey: "userId" })
  };
  return Like;
};