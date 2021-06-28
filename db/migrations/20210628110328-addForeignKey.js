"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "products",
      "categoryId",
      Sequelize.INTEGER,
      {
        allowNull: false,
        references: {
          model: {
            tableName: "categories",
          },
          key: "id",
        },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("products", "categoryId");
  },
};
