const SequelizeSlugify = require("sequelize-slugify");

const product = (sequelize, DataTypes) => {
  const myModel = sequelize.define(
    "product",
    {
      slug: {
        type: DataTypes.STRING,
        unique: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      price: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        validate: { min: 1, max: 50 },
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    { createdAt: false, updatedAt: false }
  );
  SequelizeSlugify.slugifyModel(myModel, {
    source: ["name"],
  });
  myModel.associate = (models) => {
    models.category.hasMany(myModel, { foreignKey: "categoryId" });
    myModel.belongsTo(models.category, { foreignKey: "categoryId" });
  };

  return myModel;
};

module.exports = product;
