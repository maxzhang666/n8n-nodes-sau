"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNoteOperations = createNoteOperations;
exports.createNoteFields = createNoteFields;
const types_1 = require("../types");
function createNoteOperations(platformPrefix) {
    return {
        displayName: '操作',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: [types_1.ResourceType.NOTE],
            },
        },
        options: [
            {
                name: '发布内容',
                value: 'publish',
                description: '发布一篇新内容',
                action: '发布内容',
                routing: {
                    request: {
                        method: 'POST',
                        url: `/api/${platformPrefix}/note/publish`,
                    },
                },
            },
            {
                name: '搜索内容',
                value: 'search',
                description: '根据关键词搜索内容',
                action: '搜索内容',
                routing: {
                    request: {
                        method: 'POST',
                        url: `/api/${platformPrefix}/note/search`,
                    },
                },
            },
            {
                name: '内容互动',
                value: 'operation',
                description: '对指定内容进行点赞、收藏、评论等操作',
                action: '内容互动',
                routing: {
                    request: {
                        method: 'POST',
                        url: `/api/${platformPrefix}/note/operation`,
                    },
                },
            },
            {
                name: '获取互动统计',
                value: 'stats',
                description: '获取内容的点赞、收藏、评论等统计数据',
                action: '获取互动统计',
                routing: {
                    request: {
                        method: 'POST',
                        url: `/api/${platformPrefix}/note/stats`,
                    },
                },
            },
            {
                name: '获取图片资源',
                value: 'images',
                description: '获取内容中的图片资源链接',
                action: '获取图片资源',
                routing: {
                    request: {
                        method: 'POST',
                        url: `/api/${platformPrefix}/note/images`,
                    },
                },
            },
            {
                name: '获取视频资源',
                value: 'videos',
                description: '获取内容中的视频资源链接',
                action: '获取视频资源',
                routing: {
                    request: {
                        method: 'POST',
                        url: `/api/${platformPrefix}/note/videos`,
                    },
                },
            },
            {
                name: '获取基础信息',
                value: 'basicInfo',
                description: '获取内容的基础信息，不包含互动数据和媒体文件',
                action: '获取基础信息',
                routing: {
                    request: {
                        method: 'POST',
                        url: `/api/${platformPrefix}/note/basic-info`,
                    },
                },
            },
        ],
        default: 'publish',
    };
}
function createNoteFields(platformName) {
    const contentLabel = platformName.includes('抖音') ? '视频' : '内容';
    return [
        {
            displayName: '标题',
            name: 'title',
            type: 'string',
            default: '',
            description: `${contentLabel}标题`,
            required: true,
            displayOptions: {
                show: {
                    resource: [types_1.ResourceType.NOTE],
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
            displayName: `${contentLabel}内容`,
            name: 'content',
            type: 'string',
            typeOptions: {
                rows: 3,
            },
            default: '',
            description: `${contentLabel}正文内容`,
            required: true,
            displayOptions: {
                show: {
                    resource: [types_1.ResourceType.NOTE],
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
                    resource: [types_1.ResourceType.NOTE],
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
            description: '图片URL，多个图片用逗号分隔: D:/xxx/xxx.jpg,http://xxx/xxx.jpg',
            displayOptions: {
                show: {
                    resource: [types_1.ResourceType.NOTE],
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
            description: '视频URL：D://xxx/xxx.mp4 或 http://xxx/xxx.mp4',
            displayOptions: {
                show: {
                    resource: [types_1.ResourceType.NOTE],
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
            description: '标签，多个标签用逗号分隔',
            displayOptions: {
                show: {
                    resource: [types_1.ResourceType.NOTE],
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
            displayName: '是否为私密内容',
            name: 'isPrivate',
            type: 'boolean',
            default: false,
            description: 'Whether to set as private',
            displayOptions: {
                show: {
                    resource: [types_1.ResourceType.NOTE],
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
                    resource: [types_1.ResourceType.NOTE],
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
                    resource: [types_1.ResourceType.NOTE],
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
                    resource: [types_1.ResourceType.NOTE],
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
            displayName: `${contentLabel}URL`,
            name: 'noteUrl',
            type: 'string',
            default: '',
            description: `要操作的${contentLabel}URL`,
            required: true,
            displayOptions: {
                show: {
                    resource: [types_1.ResourceType.NOTE],
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
                    resource: [types_1.ResourceType.NOTE],
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
                    resource: [types_1.ResourceType.NOTE],
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
            description: 'Whether to like the content',
            displayOptions: {
                show: {
                    resource: [types_1.ResourceType.NOTE],
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
            description: 'Whether to collect the content',
            displayOptions: {
                show: {
                    resource: [types_1.ResourceType.NOTE],
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
            displayName: `${contentLabel}URL`,
            name: 'noteUrl',
            type: 'string',
            default: '',
            description: `要获取信息的${contentLabel}URL`,
            required: true,
            displayOptions: {
                show: {
                    resource: [types_1.ResourceType.NOTE],
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
                    resource: [types_1.ResourceType.NOTE],
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
                    description: '内容类型筛选',
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
    ];
}
//# sourceMappingURL=noteOperations.js.map