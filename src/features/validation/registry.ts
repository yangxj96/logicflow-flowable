import { ValidationRule } from "../../types";
import { flowableRules } from "./rules/flowable";

/**
 * 验证规则集合
 */
const ruleMap: Record<string, ValidationRule> = {
    ...flowableRules
};

/**
 * 验证属性
 * @param ruleKey rule key
 * @param value 值
 * @param context 上下文
 */
export function validateProperty(ruleKey: string, value: any, context: any) {
    const rule = ruleMap[ruleKey];
    if (!rule) return null;
    return rule.validate(value, context);
}
