"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthOperations = createAuthOperations;
exports.createAuthFields = createAuthFields;
const types_1 = require("../types");
function createAuthOperations(platformPrefix) {
    return {
        displayName: '操作',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: [types_1.ResourceType.AUTH],
            },
        },
        options: [
            {
                name: '获取登录二维码',
                value: 'getQrCode',
                description: '获取登录用的二维码',
                action: '获取登录二维码',
                routing: {
                    request: {
                        method: 'POST',
                        url: `/api/${platformPrefix}/auth/qrcode/get`,
                    },
                },
            },
            {
                name: '二维码登录',
                value: 'checkLogin',
                description: '执行二维码登录（确保已用APP扫码并点击登录）',
                action: '二维码登录',
                routing: {
                    request: {
                        method: 'GET',
                        url: `/api/${platformPrefix}/auth/qrcode/login`,
                    },
                },
            },
        ],
        default: 'getQrCode',
    };
}
function createAuthFields() {
    return [];
}
//# sourceMappingURL=authOperations.js.map