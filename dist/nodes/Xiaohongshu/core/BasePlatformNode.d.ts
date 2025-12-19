import { INodeType, INodeTypeDescription, INodeProperties } from 'n8n-workflow';
import { IPlatformConfig } from './types';
export declare abstract class BasePlatformNode implements INodeType {
    description: INodeTypeDescription;
    constructor(config: IPlatformConfig);
    protected getAdditionalFields(): INodeProperties[];
}
