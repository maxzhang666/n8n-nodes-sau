"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformApi = void 0;
class PlatformApi {
    constructor() {
        this.name = 'platformApi';
        this.displayName = 'Platform API';
        this.documentationUrl = 'https://github.com/your-repo';
        this.icon = { light: 'file:../icons/github.svg', dark: 'file:../icons/github.dark.svg' };
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                default: '',
                required: true,
                typeOptions: {
                    password: true,
                },
                description: 'API密钥，用于访问平台API服务',
            },
            {
                displayName: 'API Domain',
                name: 'domain',
                type: 'string',
                default: 'http://localhost:3000',
                required: true,
                placeholder: 'http://ip:port',
                description: 'API服务地址。在同一docker中可使用 http://host.docker.internal:端口',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    'x-api-key': '={{$credentials.apiKey}}',
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
exports.PlatformApi = PlatformApi;
//# sourceMappingURL=PlatformApi.credentials.js.map