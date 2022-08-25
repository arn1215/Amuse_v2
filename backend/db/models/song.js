'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.TEXT,
    imageUrl: DataTypes.TEXT,
    songURL: DataTypes.TEXT,
    playlistId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.User, {foreignKey: 'userId'})
    Song.hasMany(models.Comment, { foreignKey: "songId", onDelete: 'CASCADE', hooks: true});
    Song.hasMany(models.Like, {foreignKey: 'songId', onDelete: 'CASCADE', hooks: true} )
  };
  return Song;
};