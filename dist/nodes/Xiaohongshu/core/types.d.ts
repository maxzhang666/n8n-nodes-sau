import { Icon } from "n8n-workflow";
export declare enum PlatformType {
    XIAOHONGSHU = "xiaohongshu",
    DOUYIN = "douyin"
}
export declare enum ResourceType {
    NOTE = "note",
    USER = "user",
    AUTH = "auth"
}
export interface IPlatformConfig {
    displayName: string;
    name: string;
    icon: Icon;
    description: string;
    apiPrefix: string;
}
export interface IOperationRouting {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    url: string;
}
