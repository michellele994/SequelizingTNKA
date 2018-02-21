module.exports = function(sequelize, DataTypes) {
  var Kicker = sequelize.define("Kicker", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Kicker.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Kicker.hasMany(models.assesTable, {
      onDelete: "cascade"
    });
  };

  return Kicker;
};
