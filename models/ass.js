module.exports = function(sequelize, DataTypes) {
  var assesTable = sequelize.define("assesTable", {
    ass_name: DataTypes.STRING,
    ass_picture: DataTypes.STRING,
    ass_kicked: DataTypes.BOOLEAN
  });
  return assesTable;
};
