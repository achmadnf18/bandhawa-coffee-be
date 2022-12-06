"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _jsonwebtoken = require("jsonwebtoken");
const _config = require("../config");
const _databases = _interopRequireDefault(require("../databases"));
const _httpException = require("../exceptions/HttpException");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const authMiddleware = async (req, res, next)=>{
    try {
        const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null);
        if (Authorization) {
            const secretKey = _config.SECRET_KEY;
            const verificationResponse = (0, _jsonwebtoken.verify)(Authorization, secretKey);
            const userId = verificationResponse.id;
            const findUser = await _databases.default.Users.findByPk(userId);
            if (findUser) {
                req.user = findUser;
                next();
            } else {
                next(new _httpException.HttpException(401, 'Wrong authentication token'));
            }
        } else {
            next(new _httpException.HttpException(404, 'Authentication token missing'));
        }
    } catch (error) {
        next(new _httpException.HttpException(401, 'Wrong authentication token'));
    }
};
const _default = authMiddleware;

//# sourceMappingURL=auth.middleware.js.map