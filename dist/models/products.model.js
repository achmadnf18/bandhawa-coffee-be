'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ProductModel: ()=>ProductModel,
    default: ()=>_default
});
const _sequelize = require("sequelize");
const { Model  } = require('sequelize');
let ProductModel = class ProductModel extends Model {
    static associate(models) {}
};
function _default(sequelize) {
    ProductModel.init({
        name: _sequelize.DataTypes.STRING,
        slug: _sequelize.DataTypes.STRING,
        process: _sequelize.DataTypes.STRING,
        weight: _sequelize.DataTypes.DECIMAL(10, 2),
        available: _sequelize.DataTypes.ENUM('get inquity', 'out of stock'),
        taste: _sequelize.DataTypes.STRING,
        score: _sequelize.DataTypes.DECIMAL(10, 1),
        variety: _sequelize.DataTypes.STRING,
        description: _sequelize.DataTypes.STRING,
        type: _sequelize.DataTypes.STRING,
        beans: _sequelize.DataTypes.STRING,
        elevation: _sequelize.DataTypes.STRING,
        image: _sequelize.DataTypes.STRING
    }, {
        sequelize,
        modelName: 'products',
        underscored: true
    });
    return ProductModel;
}

//# sourceMappingURL=products.model.js.map