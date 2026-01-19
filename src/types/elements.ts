import { NODE_TYPES } from "../core/constants";
import { PropertiesCap } from "./capabilities";
import { BehaviorsBase } from "./behaviors";

/**
 * 流程模型对象
 */
export interface ProcessModel {
    id: string;
    name: string;
    isExecutable: boolean;
}

/**
 * BPMN节点类型并集
 */
export type NodeType = (typeof NODE_TYPES)[keyof typeof NODE_TYPES];

/**
 * 节点功能聚合,必须要实现的功能和可选功能都放到这里聚合
 */
export interface NodeCap extends PropertiesCap, BehaviorsBase {
}
