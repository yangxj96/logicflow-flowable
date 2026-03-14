import type LogicFlow from "@logicflow/core";
import { NODE_TYPES, PLUGIN_NAME } from "./constants";
import { registerContextMenu } from "../features/context-menu";
import { FlowablePluginOptions } from "./types";
import { registerDndPanel } from "../panel/dnd";
import { registerEventNodes } from "../elements/nodes/events";
import { registerTaskNodes } from "../elements/nodes/tasks";
import { registerSequenceEdges } from "../elements/edges/sequence";
import { registerGatewayNodes } from "../elements/nodes/gateways";
import { registerPropertyPanel } from "../panel/property";
import { initProcessContext } from "../features/context/process";

/**
 * 插件注册
 */
export default class FlowablePlugin {
    /**
     * 插件名称
     */
    static pluginName = PLUGIN_NAME;

    /**
     * 插件实例
     */
    lf: LogicFlow;

    /**
     * 插件配置
     */
    options: FlowablePluginOptions;

    /**
     * 需要销毁的
     * @private
     */
    private disposers: (() => void)[] = [];

    /**
     * 插件初始化
     * @param lf
     * @param options
     */
    constructor({ lf, options }: { lf: LogicFlow; options: FlowablePluginOptions }) {
        this.lf = lf;
        this.options = options || {};
        this.init();
    }

    /**
     * 插件渲染
     * @param lf
     * @param toolOverlay
     */
    render(lf: LogicFlow, toolOverlay: HTMLElement) {}

    /**
     * 插件销毁
     */
    destroy() {
        this.disposers.forEach(disposer => disposer());
        this.disposers = [];
    }

    private init(): void {
        // 初始化上下文
        initProcessContext(this.lf);
        // 画布渲染数据后触发，即 lf.render() 方法被调用后触发。
        this.lf.on("graph:rendered", () => {
            // DND面板
            if (this.options.panel?.dnd) {
                this.disposers.push(
                    registerDndPanel({
                        lf: this.lf,
                        container: this.options.panel.dnd
                    })
                );
            }
            // 属性面板
            if (this.options.panel?.property) {
                this.disposers.push(
                    registerPropertyPanel({
                        lf: this.lf,
                        container: this.options.panel.property
                    })
                );
            }
        });
        // 初始化流程上下文
        initProcessContext(this.lf);
        // 注册相关节点
        registerEventNodes(this.lf);
        registerTaskNodes(this.lf);
        registerSequenceEdges(this.lf);
        registerGatewayNodes(this.lf);
        // 注册右键上下文菜单
        registerContextMenu(this.lf);
        // 设置默认连线
        this.lf.setDefaultEdgeType(NODE_TYPES.SEQUENCE_FLOW);
    }
}
