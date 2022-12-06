'use strict';
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            slug: {
                type: Sequelize.STRING
            },
            process: {
                type: Sequelize.STRING
            },
            weight: {
                type: Sequelize.DECIMAL(10, 2)
            },
            available: {
                type: Sequelize.ENUM('get inquity', 'out of stock')
            },
            taste: {
                type: Sequelize.STRING
            },
            score: {
                type: Sequelize.DECIMAL(10, 1)
            },
            variety: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            type: {
                type: Sequelize.STRING
            },
            beans: {
                type: Sequelize.STRING
            },
            elevation: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable('products');
    }
};

//# sourceMappingURL=20221022003246-create-products.js.map