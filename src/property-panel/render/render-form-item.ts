import { h } from "vue";
import { ElFormItem } from "element-plus";
import { commitNodeUpdate } from "../panel.actions";
import { getPropertyRenderer } from "../renderer/property-renderer.registry";
import { PropertyContext } from "../../types/renderer";

/**
 * 最小渲染单元
 * @param state 状态
 * @param property 属性
 * @param ctx 属性上下文
 */
export function renderFormItem(state: any, property: any, ctx: PropertyContext) {
    const value = ctx.target?.[property.key];

    const renderer = getPropertyRenderer(property.type);
    if (!renderer) {
        return h("div", `未注册的属性类型: ${property.type}`);
    }
    const vnode = renderer({
        property,
        value,
        onChange: v => {
            ctx.target[property.key] = v;
            if (ctx.type === "node") {
                commitNodeUpdate(state);
            }
            if (ctx.onCommit) {
                ctx.onCommit();
            }
        },
        emit: (event, payload) => {
            state.lf.emit(`property:${event}`, {
                property,
                payload,
                target: ctx.target,
                targetType: ctx.type
            });
        }
    });

    return h(ElFormItem, { label: property.label, prop: property.key }, () => vnode);
}
