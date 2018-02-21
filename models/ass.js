module.exports = function(sequelize, DataTypes) {
  var assesTable = sequelize.define("assesTable", {
    ass_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    ass_picture: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ass_kicked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
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
