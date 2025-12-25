import type LogicFlow from "@logicflow/core";
import { BehaviorsEngine } from "./engine";
import { ElMessage } from "element-plus";

/**
 * 注册线初始化
 * @param lf {@link LogicFlow} 实例
 */
export function registerEdgeConstraint(lf: LogicFlow) {
    const engine = new BehaviorsEngine(lf);

    lf.on("edge:add", ({ data }) => {
        const source = lf.getNodeModelById(data.sourceNodeId);
        const target = lf.getNodeModelById(data.targetNodeId);
        const edge   = lf.getEdgeModelById(data.id);
        if (!source || !target || !edge) return;

        const result = engine.validateEdge({ source, target, edge });

        if (!result.valid) {
            lf.deleteEdge(data.id);
            ElMessage.error(result.message);
            lf.emit("toast", result.message);
        }
    });

}

