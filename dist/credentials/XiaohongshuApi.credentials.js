"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XiaohongshuApi = void 0;
class XiaohongshuApi {
    constructor() {
        this.icon = { light: 'file:../icons/xhs.svg', dark: 'file:../icons/xhs.dark.svg' };
        this.name = 'xiaohongshuApi';
        this.displayName = 'Xiaohongshu API';
        this.documentationUrl = 'https://xiaohongshu.com/api-docs';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                default: '',
                typeOptions: {
                    password: true,
                }
            },
            {
                displayName: 'Domain',
                name: 'domain',
                type: 'string',
                default: 'http://localhost:3000',
                description: 'API服务地址，示例：http://ip:端口，n8n和api服务启动在同一docker内，一般服务地址为http://host.docker.internal:端口',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    'x-api-key': '={{$credentials.apiKey}}'
                },
            },
        };
        this.test = {
            request: {
                baseURL: '={{$credentials?.domain}}',
                url: '/api/auth/status',
                method: 'GET',
            },
        };
    }
}
exports.XiaohongshuApi = XiaohongshuApi;
//# sourceMappingURL=XiaohongshuApi.credentials.js.map