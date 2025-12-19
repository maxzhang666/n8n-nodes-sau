"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserOperations = createUserOperations;
exports.createUserFields = createUserFields;
const types_1 = require("../types");
function createUserOperations(platformPrefix) {
    return {
        displayName: '操作',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: [types_1.ResourceType.USER],
            },
        },
        options: [
            {
                name: '搜索用户',
                value: 'search',
                description: '搜索平台用户',
                action: '搜索用户',
                routing: {
                    request: {
                        method: 'POST',
                        url: `/api/${platformPrefix}/user/search`,
                    },
                },
            },
            {
                name: '获取用户内容',
                value: 'notes',
                description: '获取指定用户发布的内容列表',
                action: '获取用户内容',
                routing: {
                    request: {
                        method: 'POST',
                        url: `/api/${platformPrefix}/user/notes`,
                    },
                },
            },
        ],
        default: 'search',
    };
}
function createUserFields() {
    return [
        {
            displayName: '关键词',
            name: 'keywords',
            type: 'string',
            default: '',
            description: '搜索关键词',
            required: true,
            displayOptions: {
                show: {
                    resource: [types_1.ResourceType.USER],
                    operation: ['search'],
                },
            },
            routing: {
                send: {
                    type: 'body',
                    property: 'keywords',
                },
            },
        },
        {
            displayName: '限制结果数量',
            name: 'limit',
            type: 'number',
            typeOptions: {
                minValue: 1,
            },
            default: 50,
            description: 'Max number of results to return',
            displayOptions: {
                show: {
                    resource: [types_1.ResourceType.USER],
                    operation: ['search'],
                },
            },
            routing: {
                send: {
                    type: 'body',
                    property: 'limit',
                },
            },
        },
        {
            displayName: '用户主页URL',
            name: 'profileUrl',
            type: 'string',
            default: '',
            description: '要获取内容的用户主页URL',
            required: true,
            displayOptions: {
                show: {
                    resource: [types_1.ResourceType.USER],
                    operation: ['notes'],
                },
            },
            routing: {
                send: {
                    type: 'body',
                    property: 'profileUrl',
                },
            },
        },
        {
            displayName: '限制结果数量',
            name: 'limit',
            type: 'number',
            typeOptions: {
                minValue: 1,
            },
            default: 50,
            description: 'Max number of results to return',
            displayOptions: {
                show: {
                    resource: [types_1.ResourceType.USER],
                    operation: ['notes'],
                },
            },
            routing: {
                send: {
                    type: 'body',
                    property: 'limit',
                },
            },
        },
    ];
}
//# sourceMappingURL=userOperations.js.map