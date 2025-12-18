// 校验注册中心（后期扩展关键）
import { flowableRules } from './rules/flowable'

const ruleMap = {
    ...flowableRules
}

export function validateProperty(ruleKey: string, value: any, context: any) {
    // @ts-ignore
    const rule = ruleMap[ruleKey]
    if (!rule) return null
    return rule.validate(value, context)
}
