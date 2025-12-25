import type { BaseEdgeModel, BaseNodeModel } from "@logicflow/core";

/**
 * 节点行为
 */
export interface NodeBehavior {
    /* ===== 拓扑 ===== */

    // 是否允许连接
    allowIn?: boolean;
    // 是否运行被连接
    allowOut?: boolean;
    // 最大入线数量
    maxIn?: number;
    // 最大出线数量
    maxOut?: number;
    // 最小入线数量
    minIn?: number;
    // 最小出线数量
    minOut?: number;

    /* ===== 连接语义 ===== */

    // 允许的来源
    allowSourceTypes?: string[];
    // 允许的目标
    allowTargetTypes?: string[];

    /* ===== 边约束 ===== */
    edge?: {
        // 允许同一节点之间存在多个连接
        allowMultipleBetweenSameNodes?: boolean;
        // 必备条件
        mustHaveCondition?: boolean;
    };

    /* ===== 运行语义（流程合法性） ===== */
    validate?: (ctx: {
        // 入线数量
        inCount: number;
        // 出线数量
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
 * 校验结果
 */
export interface ValidateResult {
    valid: boolean;
    message?: string;
}
