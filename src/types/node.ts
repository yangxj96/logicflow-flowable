import { NODE_TYPES } from "../core/constants";

/**
 * 流程模型对象
 */
export interface ProcessModel {
    id: string;
    name: string;
    isExecutable: boolean;
}

/**
 * BPMN Node Type Union
 */
export type NodeType = (typeof NODE_TYPES)[keyof typeof NODE_TYPES];
