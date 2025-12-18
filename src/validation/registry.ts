// 校验注册中心
import { flowableRules } from "./rules/flowable";

const ruleMap = {
    ...flowableRules
};

/**
 * 验证属性
 * @param ruleKey rule key
 * @param value 值
 * @param context 上下文
 */
export function validateProperty(ruleKey: string, value: any, context: any) {
    // @ts-ignore
    const rule = ruleMap[ruleKey];
    if (!rule) return null;
    return rule.validate(value, context);
}
