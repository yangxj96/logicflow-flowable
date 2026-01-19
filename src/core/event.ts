import LogicFlow from "@logicflow/core";
import { resolveFlowableOptions } from "./default-options";
import { registerDefaultPropertyRenderers } from "../features/property-panel/renderer/register-defaults";
import { registerPropertyPanel } from "../features/property-panel";
import { registerDndPanel } from "../features/dnd-panel";
import { PLUGIN_NAME } from "./constants";

let defaultRenderersRegistered = false;
let propertyPanelMounted = false;

/**
 * 注册所有额外事件
 * @param lf LogicFlow实例
 */
export function registerEvent(lf: LogicFlow) {
    // 画布渲染数据后触发，即 lf.render() 方法被调用后触发。
    lf.on("graph:rendered", () => {
        if (!lf.options.pluginsOptions) {
            return;
        }
        const options = resolveFlowableOptions(lf.options.pluginsOptions[PLUGIN_NAME]);
        // 属性面板相关
        if (options.propertyPanel) {
            let propertyPanel = options.propertyPanel;

            // 注册默认属性类型渲染器
            if (propertyPanel.defaultRenderers && !defaultRenderersRegistered) {
                registerDefaultPropertyRenderers();
                defaultRenderersRegistered = true;
            }

            // 注册属性面板
            if (propertyPanel.enabled && propertyPanel.container && !propertyPanelMounted) {
                registerPropertyPanel({
                    container: propertyPanel.container,
                    lf: lf
                });
                propertyPanelMounted = true;
            }
        }

        // DND面板
        if (options.dndPanel) {
            let dndPanel = options.dndPanel;
            if (dndPanel.enabled && dndPanel.container) {
                registerDndPanel({
                    lf: lf,
                    container: dndPanel.container
                });
            }
        }

    });
}
