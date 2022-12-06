"use strict";
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
    UserModel: ()=>UserModel,
    default: ()=>_default
});
const _sequelize = require("sequelize");
let UserModel = class UserModel extends _sequelize.Model {
};
function _default(sequelize) {
    UserModel.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: _sequelize.DataTypes.INTEGER
        },
        email: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(45)
        },
        password: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(255)
        }
    }, {
        tableName: 'users',
        sequelize
    });
    return UserModel;
}

//# sourceMappingURL=users.model.js.map