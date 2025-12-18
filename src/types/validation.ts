import type LogicFlow from "@logicflow/core";

/**
 * 验证规则
 */
export interface ValidationRule {
    name: string;
    validate: (value: any, context: ValidationContext) => string | null;
}

/**
 * 验证上下文
 */
export interface ValidationContext {
    nodeType: string;
    allValues: Record<string, LogicFlow.PropertiesType>;
}
