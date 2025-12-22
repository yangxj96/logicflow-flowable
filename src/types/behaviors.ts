import type { BaseEdgeModel, BaseNodeModel } from "@logicflow/core";

/**
 * 节点行为
 */
export interface NodeBehavior {
    /* ===== 拓扑 ===== */
    allowIn?: boolean;
    allowOut?: boolean;
    maxIn?: number;
    maxOut?: number;
    minIn?: number;
    minOut?: number;

    /* ===== 连接语义 ===== */

    // 运行的来源
    allowSourceTypes?: string[];
    // 允许的目标
    allowTargetTypes?: string[];

    /* ===== 边约束 ===== */
    edge?: {
        allowMultipleBetweenSameNodes?: boolean;
        mustHaveCondition?: boolean;
    };

    /* ===== 运行语义（流程合法性） ===== */
    validate?: (ctx: {
        inCount: number;
        outCount: number;
    }) => string | void;
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

export interface EdgeValidateContext {
    source: BaseNodeModel;
    target: BaseNodeModel;
    edge: BaseEdgeModel;
}

export interface NodeValidateContext {
    node: BaseNodeModel;
    behavior: NodeBehavior;
}

export interface ValidateResult {
    valid: boolean;
    message?: string;
}
