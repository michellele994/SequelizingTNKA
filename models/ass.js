module.exports = function(sequelize, DataTypes) {
  var assesTable = sequelize.define("assesTable", {
    ass_name: DataTypes.STRING,
    ass_picture: DataTypes.INTEGER,
    ass_kicked: DataTypes.BOOLEAN
  });

    assesTable.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    assesTable.belongsTo(models.Kicker, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return assesTable;
};
