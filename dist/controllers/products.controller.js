"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _productsService = _interopRequireDefault(require("../services/products.service"));
const _util = require("../utils/util");
const _fs = _interopRequireDefault(require("fs"));
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
let ProductsController = class ProductsController {
    constructor(){
        this.productService = new _productsService.default();
        this.getProducts = async (req, res, next)=>{
            try {
                const findAllProductsData = await this.productService.findAllProduct();
                res.status(200).json({
                    data: findAllProductsData,
                    message: 'findAll'
                });
            } catch (error) {
                next(error);
            }
        };
        this.getProductById = async (req, res, next)=>{
            try {
                const productId = Number(req.params.id);
                const findOneProductData = await this.productService.findProductById(productId);
                res.status(200).json({
                    data: findOneProductData,
                    message: 'findOne'
                });
            } catch (error) {
                next(error);
            }
        };
        this.createProduct = async (req, res, next)=>{
            try {
                const productData = req.body;
                const productImage = productData.image;
                const { image , imageName , extension  } = (0, _util.base64toImg)(productImage);
                if (!image) throw Error('image is must base64 string!');
                const filePath = `public/images/${imageName}.${extension}`;
                _fs.default.writeFileSync(filePath, image);
                const createProductData = await this.productService.createProduct(_objectSpreadProps(_objectSpread({}, productData), {
                    image: `${imageName}.${extension}`
                }));
                res.status(201).json({
                    data: createProductData,
                    message: 'created'
                });
            } catch (error) {
                next(error);
            }
        };
        this.updateProduct = async (req, res, next)=>{
            try {
                const productId = Number(req.params.id);
                const productData = req.body;
                const payload = _objectSpread({}, productData);
                const productImage = productData.image;
                const { image , imageName , extension  } = (0, _util.base64toImg)(productImage);
                if (image) {
                    const filePath = `public/images/${imageName}.${extension}`;
                    _fs.default.writeFileSync(filePath, image);
                    payload.image = `${imageName}.${extension}`;
                }
                const updateProductData = await this.productService.updateProduct(productId, payload);
                res.status(200).json({
                    data: updateProductData,
                    message: 'updated'
                });
            } catch (error) {
                next(error);
            }
        };
        this.deleteProduct = async (req, res, next)=>{
            try {
                const productId = Number(req.params.id);
                const deleteProductData = await this.productService.deleteProduct(productId);
                res.status(200).json({
                    data: deleteProductData,
                    message: 'deleted'
                });
            } catch (error) {
                next(error);
            }
        };
    }
};
const _default = ProductsController;

//# sourceMappingURL=products.controller.js.map