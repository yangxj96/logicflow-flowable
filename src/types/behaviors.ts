import type { BaseEdgeModel, BaseNodeModel } from "@logicflow/core";

/**
 * 连线行为
 */
export interface EdgeBehavior {
    // 是否允许同一 source -> target 多条线
    allowMultipleBetweenSameNodes?: boolean;
    // 必备条件
    mustHaveCondition?: boolean;
    // 允许默认连线
    allowDefaultFlow?: boolean;
    // 最大默认连线数量 通常是 1
    maxDefaultFlow?: number;
    // 创建连线时校验（强规则）
    validateOnCreate?: (ctx: EdgeValidateContext) => string | void;
    // 全流程校验（软规则）
    validateOnGraph?: (ctx: EdgeValidateContext) => string | void;
}

/**
 * 节点行为
 */
export interface NodeBehavior {
    // 最大入线数量
    maxIn?: number;
    // 最大出线数量
    maxOut?: number;
    // 最小入线数量
    minIn?: number;
    // 最小出线数量
    minOut?: number;

    // 是否允许连接
    allowIn?: boolean;
    // 是否运行被连接
    allowOut?: boolean;

    // 允许的来源
    allowSourceTypes?: string[];
    // 允许的目标
    allowTargetTypes?: string[];

    // 节点级校验（全流程）
    validate?: (ctx: {
        // 节点
        node: any;
        // 入线数量
        inCount: number;
        // 出线数量
        outCount: number;
    }) => string | void;

    // 节点关联的 edge 行为
    edge?: EdgeBehavior;
}

/**
 * 行为基类
 */
export interface BehaviorsBase {
    /**
     * 获取行为
     */
    getBehavior(): NodeBehavior;
}

/**
 * 连线行为校验上下文
 */
export interface EdgeValidateContext {
    source: BaseNodeModel;
    target: BaseNodeModel;
    edge: BaseEdgeModel;
}

/**
 * 节点行为校验上下文
 */
export interface NodeValidateContext {
    node: BaseNodeModel;
    behavior: NodeBehavior;
}

/**
 * 统一校验结果
 */
export interface ValidateResult {
    valid: boolean;
    message: string;
    nodeId?: string;
    edgeId?: string;
    level?: "error" | "warn";
    code?: string;
}

