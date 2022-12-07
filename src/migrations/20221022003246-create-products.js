/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      slug: {
        type: Sequelize.STRING,
      },
      process: {
        type: Sequelize.STRING,
      },
      weight: {
        // type: Sequelize.DECIMAL(10, 2),
        type: Sequelize.STRING,
      },
      available: {
        type: Sequelize.ENUM('get inquity', 'out of stock'),
      },
      taste: {
        type: Sequelize.STRING,
      },
      score: {
        // type: Sequelize.DECIMAL(10, 1),
        type: Sequelize.STRING,
      },
      variety: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      beans: {
        type: Sequelize.STRING,
      },
      elevation: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  },
};
