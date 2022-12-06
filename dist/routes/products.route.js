"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _express = require("express");
const _validationMiddleware = _interopRequireDefault(require("../middlewares/validation.middleware"));
const _productsController = _interopRequireDefault(require("../controllers/products.controller"));
const _productsDto = require("../dtos/products.dto");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let ProductsRoute = class ProductsRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, this.productsController.getProducts);
        this.router.get(`${this.path}/:id(\\d+)`, this.productsController.getProductById);
        this.router.post(`${this.path}`, (0, _validationMiddleware.default)(_productsDto.CreateProductDto, 'body'), this.productsController.createProduct);
        this.router.put(`${this.path}/:id(\\d+)`, (0, _validationMiddleware.default)(_productsDto.CreateProductDto, 'body', true), this.productsController.updateProduct);
        this.router.delete(`${this.path}/:id(\\d+)`, this.productsController.deleteProduct);
    }
    constructor(){
        this.path = '/products';
        this.router = (0, _express.Router)();
        this.productsController = new _productsController.default();
        this.initializeRoutes();
    }
};
const _default = ProductsRoute;

//# sourceMappingURL=products.route.js.map