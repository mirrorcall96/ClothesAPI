"use strict";

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.addColumn("products", "name", {
      type: DataTypes.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn("products", "description", {
      type: DataTypes.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn("products", "price", {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      validate: { min: 1, max: 50 },
    });
    await queryInterface.addColumn("products", "image", {
      type: DataTypes.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("products", "name");
    await queryInterface.removeColumn("products", "description");
    await queryInterface.removeColumn("products", "price");
    await queryInterface.removeColumn("products", "image");
  },
};
