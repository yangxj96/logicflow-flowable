// element-plus 校验
import type { FormRules } from "element-plus";
import { validateProperty } from "../registry";
import { BaseProperty } from "../../properties/base";

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
        console.log(rules);
    });

    return rules;
}
