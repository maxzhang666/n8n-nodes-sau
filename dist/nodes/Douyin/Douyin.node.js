"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Douyin = void 0;
const BasePlatformNode_1 = require("./core/BasePlatformNode");
const types_1 = require("./core/types");
class Douyin extends BasePlatformNode_1.BasePlatformNode {
    constructor() {
        super({
            displayName: '抖音',
            name: types_1.PlatformType.DOUYIN,
            icon: 'file:douyin.svg',
            description: '与抖音平台API交互',
            apiPrefix: 'douyin',
        });
    }
    getAdditionalFields() {
        return [];
    }
}
exports.Douyin = Douyin;
//# sourceMappingURL=Douyin.node.js.map