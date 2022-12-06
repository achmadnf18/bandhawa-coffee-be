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
    isEmpty: ()=>isEmpty,
    base64toImg: ()=>base64toImg
});
const _uuidv4 = require("uuidv4");
const isEmpty = (value)=>{
    if (value === null) {
        return true;
    } else if (typeof value !== 'number' && value === '') {
        return true;
    } else if (typeof value === 'undefined' || value === undefined) {
        return true;
    } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
        return true;
    } else {
        return false;
    }
};
const base64toImg = (base64)=>{
    try {
        var ref;
        const imageName = (0, _uuidv4.uuid)();
        const extension = (ref = base64.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)) === null || ref === void 0 ? void 0 : ref[0].split('/')[1];
        const image = Buffer.from(base64.split(',')[1], 'base64');
        return {
            image,
            imageName,
            extension
        };
    } catch (err) {
        return {
            image: undefined,
            imageName: undefined,
            extension: undefined
        };
    }
};

//# sourceMappingURL=util.js.map