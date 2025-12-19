"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xiaohongshu = void 0;
const BasePlatformNode_1 = require("./core/BasePlatformNode");
const types_1 = require("./core/types");
class Xiaohongshu extends BasePlatformNode_1.BasePlatformNode {
    constructor() {
        super({
            displayName: '小红书',
            name: types_1.PlatformType.XIAOHONGSHU,
            icon: 'file:xhs.svg',
            description: '与小红书平台API交互',
            apiPrefix: 'xiaohongshu',
        });
    }
    getAdditionalFields() {
        return [];
    }
}
exports.Xiaohongshu = Xiaohongshu;
//# sourceMappingURL=Xiaohongshu.node.js.map