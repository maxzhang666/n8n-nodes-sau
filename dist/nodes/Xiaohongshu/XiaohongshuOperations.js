"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notePublishFields = exports.xiaohongshuOperations = void 0;
exports.xiaohongshuOperations = [
    {
        displayName: '操作',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['note'],
            },
        },
        options: [
            {
                name: '发布笔记',
                value: 'publish',
                description: '发布一篇小红书笔记',
                action: '发布笔记',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/api/note/publish',
                    },
                },
            },
            {
                name: '搜索笔记',
                value: 'search',
                description: '根据关键词搜索小红书笔记',
                action: '搜索笔记',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/api/note/search',
                    },
                },
            },
            {
                name: '笔记互动',
                value: 'operation',
                description: '对指定笔记进行点赞、收藏、评论等操作',
                action: '笔记互动',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/api/note/operation',
                    },
                },
            },
            {
                name: '获取互动统计数据',
                value: 'stats',
                description: '仅获取笔记的点赞、收藏、评论数据',
                action: '获取互动统计数据',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/api/note/stats',
                    },
                },
            },
            {
                name: '获取图片资源',
                value: 'images',
                description: '仅获取笔记中的图片资源链接',
                action: '获取图片资源',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/api/note/images',
                    },
                },
            },
            {
                name: '获取视频资源',
                value: 'videos',
                description: '仅获取笔记中的视频资源链接',
                action: '获取视频资源',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/api/note/videos',
                    },
                },
            },
            {
                name: '获取笔记基础信息',
                value: 'basicInfo',
                description: '仅获取笔记的基础内容信息，不包含互动数据和媒体文件',
                action: '获取笔记基础信息',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/api/note/basic-info',
                    },
                },
            },
        ],
        default: 'publish',
    },
    {
        displayName: '操作',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['user'],
            },
        },
        options: [
            {
                name: '搜索用户',
                value: 'search',
                description: '搜索小红书平台的用户，支持关键词搜索用户昵称',
                action: '搜索用户',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/api/user/search',
                    },
                },
            },
            {
                name: '获取用户笔记',
                value: 'notes',
                description: '获取指定用户发布的笔记列表',
                action: '获取用户笔记',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/api/user/notes',
                    },
                },
            },
        ],
        default: 'search',
    },
    {
        displayName: '操作',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['auth'],
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
                        url: '/api/auth/qrcode/get'
                    },
                },
            },
            {
                name: '二维码登录',
                value: 'checkLogin',
                description: '执行二维码登录（确保已经用小红书app扫码，并点击登录）',
                action: '二维码登录',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/api/auth/qrcode/login',
                    },
                },
            },
        ],
        default: 'getQrCode',
    },
];
exports.notePublishFields = [
    {
        displayName: '标题',
        name: 'title',
        type: 'string',
        default: '',
        description: '笔记标题',
        required: true,
        displayOptions: {
            show: {
                resource: ['note'],
                operation: ['publish'],
            },
        },
        routing: {
            send: {
                type: 'body',
                property: 'title',
            },
        },
    },
    {
        displayName: '笔记内容',
        name: 'content',
        type: 'string',
        typeOptions: {
            rows: 3,
        },
        default: '',
        description: '笔记正文内容',
        required: true,
        displayOptions: {
            show: {
                resource: ['note'],
                operation: ['publish'],
            },
        },
        routing: {
            send: {
                type: 'body',
                property: 'content',
            },
        },
    },
    {
        displayName: '媒体类型',
        name: 'mediaType',
        type: 'options',
        noDataExpression: true,
        options: [
            {
                name: '图片',
                value: 'images',
            },
            {
                name: '视频',
                value: 'videos',
            },
        ],
        default: 'images',
        description: '选择媒体类型',
        displayOptions: {
            show: {
                resource: ['note'],
                operation: ['publish'],
            },
        },
    },
    {
        displayName: '图片路径或地址',
        name: 'images',
        type: 'string',
        required: true,
        typeOptions: {
            rows: 3,
        },
        default: '',
        description: '笔记图片URL，多个图片URL用逗号分隔: D:/xxx/xxx.jpg,http://xxx/xxx.jpg',
        displayOptions: {
            show: {
                resource: ['note'],
                operation: ['publish'],
                mediaType: ['images'],
            },
        },
        routing: {
            send: {
                type: 'body',
                property: 'images',
            },
        },
    },
    {
        displayName: '视频路径或地址',
        name: 'videos',
        type: 'string',
        required: true,
        typeOptions: {
            rows: 1,
        },
        default: '',
        description: '笔记视频URL：D://xxx/xxx.mp4 或 http://xxx/xxx.mp4',
        displayOptions: {
            show: {
                resource: ['note'],
                operation: ['publish'],
                mediaType: ['videos'],
            },
        },
        routing: {
            send: {
                type: 'body',
                property: 'videos',
            },
        },
    },
    {
        displayName: '标签',
        name: 'tags',
        type: 'string',
        default: '',
        description: '笔记标签，多个标签用逗号分隔',
        displayOptions: {
            show: {
                resource: ['note'],
                operation: ['publish'],
            },
        },
        routing: {
            send: {
                type: 'body',
                property: 'tags',
            },
        },
    },
    {
        displayName: '是否为私密笔记',
        name: 'isPrivate',
        type: 'boolean',
        default: false,
        description: 'Whether to set this note as private',
        displayOptions: {
            show: {
                resource: ['note'],
                operation: ['publish'],
            },
        },
        routing: {
            send: {
                type: 'body',
                property: 'isPrivate',
            },
        },
    },
    {
        displayName: '是否为原创内容',
        name: 'isOriginal',
        type: 'boolean',
        default: true,
        description: 'Whether to mark as original content',
        displayOptions: {
            show: {
                resource: ['note'],
                operation: ['publish'],
            },
        },
        routing: {
            send: {
                type: 'body',
                property: 'isOriginal',
            },
        },
    },
    {
        displayName: '关键词',
        name: 'keywords',
        type: 'string',
        default: '',
        description: '搜索关键词',
        required: true,
        displayOptions: {
            show: {
                resource: ['note'],
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
                resource: ['note'],
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
        displayName: '笔记URL',
        name: 'noteUrl',
        type: 'string',
        default: '',
        description: '要操作的笔记URL',
        required: true,
        displayOptions: {
            show: {
                resource: ['note'],
                operation: ['operation'],
            },
        },
        routing: {
            send: {
                type: 'body',
                property: 'noteUrl',
            },
        },
    },
    {
        displayName: '评论ID',
        name: 'commentId',
        type: 'string',
        default: '',
        description: '评论ID（可选）',
        displayOptions: {
            show: {
                resource: ['note'],
                operation: ['operation'],
            },
        },
        routing: {
            send: {
                type: 'body',
                property: 'commentId',
            },
        },
    },
    {
        displayName: '评论内容',
        name: 'content',
        type: 'string',
        default: '',
        description: '评论内容（可选）',
        displayOptions: {
            show: {
                resource: ['note'],
                operation: ['operation'],
            },
        },
        routing: {
            send: {
                type: 'body',
                property: 'content',
            },
        },
    },
    {
        displayName: '是否点赞',
        name: 'isLike',
        type: 'boolean',
        default: false,
        description: 'Whether to like the note',
        displayOptions: {
            show: {
                resource: ['note'],
                operation: ['operation'],
            },
        },
        routing: {
            send: {
                type: 'body',
                property: 'isLike',
            },
        },
    },
    {
        displayName: '是否收藏',
        name: 'isCollect',
        type: 'boolean',
        default: false,
        description: 'Whether to collect the note',
        displayOptions: {
            show: {
                resource: ['note'],
                operation: ['operation'],
            },
        },
        routing: {
            send: {
                type: 'body',
                property: 'isCollect',
            },
        },
    },
    {
        displayName: '笔记URL',
        name: 'noteUrl',
        type: 'string',
        default: '',
        description: '要获取信息的笔记URL',
        required: true,
        displayOptions: {
            show: {
                resource: ['note'],
                operation: ['basicInfo', 'stats', 'images', 'videos'],
            },
        },
        routing: {
            send: {
                type: 'body',
                property: 'noteUrl',
            },
        },
    },
    {
        displayName: '筛选条件',
        name: 'filterOptions',
        type: 'collection',
        placeholder: '添加筛选条件',
        default: {},
        description: '搜索结果筛选条件',
        displayOptions: {
            show: {
                resource: ['note'],
                operation: ['search'],
            },
        },
        options: [
            {
                displayName: '排序方式',
                name: 'sort',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: '最新',
                        value: '最新',
                    },
                    {
                        name: '最多点赞',
                        value: '最多点赞',
                    },
                    {
                        name: '最多评论',
                        value: '最多评论',
                    },
                    {
                        name: '最多收藏',
                        value: '最多收藏',
                    },
                ],
                default: '最新',
                description: '搜索结果排序方式',
            },
            {
                displayName: '内容类型',
                name: 'type',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: '图文',
                        value: '图文',
                    },
                    {
                        name: '视频',
                        value: '视频',
                    },
                ],
                default: '图文',
                description: '笔记内容类型筛选',
            },
            {
                displayName: '时间范围',
                name: 'time',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: '一天内',
                        value: '一天内',
                    },
                    {
                        name: '一周内',
                        value: '一周内',
                    },
                    {
                        name: '半年内',
                        value: '半年内',
                    },
                ],
                default: '一周内',
                description: '发布时间范围筛选',
            },
            {
                displayName: '查看范围',
                name: 'scope',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: '已看过',
                        value: '已看过',
                    },
                    {
                        name: '未看过',
                        value: '未看过',
                    },
                    {
                        name: '已关注',
                        value: '已关注',
                    },
                ],
                default: '未看过',
                description: '查看状态筛选',
            },
        ],
        routing: {
            send: {
                type: 'body',
                property: 'filterOptions',
            },
        },
    },
    {
        displayName: '关键词',
        name: 'keywords',
        type: 'string',
        default: '',
        description: '搜索关键词',
        required: true,
        displayOptions: {
            show: {
                resource: ['user'],
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
                resource: ['user'],
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
        description: '要获取笔记的用户主页URL',
        required: true,
        displayOptions: {
            show: {
                resource: ['user'],
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
                resource: ['user'],
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
//# sourceMappingURL=XiaohongshuOperations.js.map