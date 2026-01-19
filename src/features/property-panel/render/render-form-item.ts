import { h } from "vue";
import { ElFormItem } from "element-plus";
import { commitNodeUpdate } from "../panel.actions";
import { getPropertyRenderer } from "../renderer/property-renderer.registry";
import { PropertyContext } from "../../../types/renderer";
import { PanelState, Property } from "../../../types";

/**
 * 最小渲染单元
 * @param state 状态
 * @param property 属性
 * @param ctx 属性上下文
 */
export function renderFormItem(state: PanelState, property: Property, ctx: PropertyContext) {
    const value = ctx.target?.[property.key];
    const node = state.currentNode.value;
    const renderer = getPropertyRenderer(property.type);
    if (!renderer) {
        return h("div", `未注册的属性类型: ${property.type}`);
    }
    const renderFn = renderer({
        property: property,
        value: value,
        onChange: (v: any) => {
            ctx.target[property.key] = v;
            if (ctx.type === "node") {
                commitNodeUpdate(state);
            }
            if (ctx.onCommit) {
                ctx.onCommit();
            }
        },
        emit: (event: any, payload: any) => {
            state.lf.emit(`property:${event}`, {
                node,
                property,
                payload,
                target: ctx.target,
                targetType: ctx.type
            });
        }
    });

    return h(ElFormItem, { label: property.label, prop: property.key }, { default: () => [renderFn()] });
}
