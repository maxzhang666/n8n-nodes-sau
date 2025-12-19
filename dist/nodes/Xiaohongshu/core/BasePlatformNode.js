"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePlatformNode = void 0;
const types_1 = require("./types");
const noteOperations_1 = require("./operations/noteOperations");
const userOperations_1 = require("./operations/userOperations");
const authOperations_1 = require("./operations/authOperations");
class BasePlatformNode {
    constructor(config) {
        this.description = {
            displayName: config.displayName,
            name: config.name,
            icon: config.icon,
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
            description: config.description,
            defaults: {
                name: config.displayName,
            },
            inputs: ['main'],
            outputs: ['main'],
            usableAsTool: true,
            credentials: [
                {
                    name: 'platformApi',
                    required: true,
                },
            ],
            requestDefaults: {
                baseURL: '={{$credentials.domain}}',
                url: '',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                json: true,
            },
            properties: [
                {
                    displayName: '资源',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: '内容',
                            value: types_1.ResourceType.NOTE,
                        },
                        {
                            name: '用户',
                            value: types_1.ResourceType.USER,
                        },
                        {
                            name: '登录',
                            value: types_1.ResourceType.AUTH,
                        },
                    ],
                    default: types_1.ResourceType.NOTE.toString(),
                },
                (0, noteOperations_1.createNoteOperations)(config.apiPrefix),
                (0, userOperations_1.createUserOperations)(config.apiPrefix),
                (0, authOperations_1.createAuthOperations)(config.apiPrefix),
                ...(0, noteOperations_1.createNoteFields)(config.displayName),
                ...(0, userOperations_1.createUserFields)(),
                ...(0, authOperations_1.createAuthFields)(),
                ...this.getAdditionalFields(),
            ],
        };
    }
    getAdditionalFields() {
        return [];
    }
}
exports.BasePlatformNode = BasePlatformNode;
//# sourceMappingURL=BasePlatformNode.js.map