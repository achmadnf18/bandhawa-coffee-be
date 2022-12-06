"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _sequelize = _interopRequireDefault(require("sequelize"));
const _config = require("../config");
const _productsModel = _interopRequireDefault(require("../models/products.model"));
const _usersModel = _interopRequireDefault(require("../models/users.model"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const sequelize = new _sequelize.default.Sequelize(_config.DB_DATABASE, _config.DB_USER, _config.DB_PASSWORD, {
    dialect: 'mysql',
    host: _config.DB_HOST,
    port: Number(_config.DB_PORT),
    timezone: '+07:00',
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        underscored: true,
        freezeTableName: true
    },
    pool: {
        min: 0,
        max: 5
    },
    logQueryParameters: _config.NODE_ENV === 'development',
    benchmark: true
});
sequelize.authenticate();
const DB = {
    Users: (0, _usersModel.default)(sequelize),
    Products: (0, _productsModel.default)(sequelize),
    sequelize,
    Sequelize: _sequelize.default
};
const _default = DB;

//# sourceMappingURL=index.js.map