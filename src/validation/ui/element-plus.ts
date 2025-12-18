import type { FormRules } from "element-plus";
import { validateProperty } from "../registry";
import { BaseProperty } from "../../types";

/**
 * 构建ElementPlus的表单校验对象
 * @param properties 节点属性
 * @param context 上下文
 */
export function buildElFormRules(properties: BaseProperty[], context: any): FormRules {
    const rules: FormRules = {};
    properties.forEach((prop: BaseProperty) => {
        if (!prop.validate) return;

        rules[prop.key] = [
            {
                trigger: ["blur", "change"],
                validator: (_, value, callback) => {
                    // required
                    if (prop.validate?.required && !value) {
                        callback(new Error(`${prop.label}不能为空`));
                        return;
                    }

                    // 自定义规则
                    if (prop.validate?.ruleKey) {
                        const error = validateProperty(prop.validate.ruleKey, value, context);
                        if (error) {
                            callback(new Error(error));
                            return;
                        }
                    }

                    callback();
                }
            }
        ];
    });

    return rules;
}
