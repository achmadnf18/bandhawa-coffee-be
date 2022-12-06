"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _databases = _interopRequireDefault(require("../databases"));
const _httpException = require("../exceptions/HttpException");
const _util = require("../utils/util");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
let ProductService = class ProductService {
    async findAllProduct() {
        const allProduct = await this.products.findAll({
            order: [
                [
                    'id',
                    'DESC'
                ],
                [
                    'created_at',
                    'DESC'
                ]
            ]
        });
        return allProduct;
    }
    async findProductById(productId) {
        if ((0, _util.isEmpty)(productId)) throw new _httpException.HttpException(400, 'ProductId is empty');
        const findProduct = await this.products.findByPk(productId);
        if (!findProduct) throw new _httpException.HttpException(409, "Product doesn't exist");
        return findProduct;
    }
    async createProduct(productData) {
        if ((0, _util.isEmpty)(productData)) throw new _httpException.HttpException(400, 'productData is empty');
        const findProduct = await this.products.findOne({
            where: {
                name: productData.name
            }
        });
        if (findProduct) throw new _httpException.HttpException(409, `This product name ${productData.name} is already exists`);
        const createProductData = await this.products.create(_objectSpread({}, productData));
        return createProductData;
    }
    async updateProduct(productId, productData) {
        if ((0, _util.isEmpty)(productData)) throw new _httpException.HttpException(400, 'productData is empty');
        const findProduct = await this.products.findByPk(productId);
        if (!findProduct) throw new _httpException.HttpException(409, "Product doesn't exist");
        await this.products.update(_objectSpread({}, productData), {
            where: {
                id: productId
            }
        });
        const updateProduct = await this.products.findByPk(productId);
        return updateProduct;
    }
    async deleteProduct(productId) {
        if ((0, _util.isEmpty)(productId)) throw new _httpException.HttpException(400, "Product doesn't existId");
        const findProduct = await this.products.findByPk(productId);
        if (!findProduct) throw new _httpException.HttpException(409, "Product doesn't exist");
        await this.products.destroy({
            where: {
                id: productId
            }
        });
        return findProduct;
    }
    constructor(){
        this.products = _databases.default.Products;
    }
};
const _default = ProductService;

//# sourceMappingURL=products.service.js.map