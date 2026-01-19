import type LogicFlow from "@logicflow/core";
import { BehaviorsEngine } from "./engine";
import { validateBeforePublish } from "../validation/graph-validator";

/**
 * 注册线初始化
 * @param lf {@link LogicFlow} 实例
 */
export function registerEdgeConstraint(lf: LogicFlow) {
    const engine = new BehaviorsEngine(lf);

    lf.on("edge:add", ({ data }) => {
        const source = lf.getNodeModelById(data.sourceNodeId);
        const target = lf.getNodeModelById(data.targetNodeId);
        const edge = lf.getEdgeModelById(data.id);
        if (!source || !target || !edge) return;

        const { valid, message } = engine.validateEdge({ source, target, edge });
        if (!valid) {
            lf.deleteEdge(data.id);
            lf.emit("toast", message);
        }
    });

    // 自动保存
    lf.on("graph:save", () => {
        const errors = validateBeforePublish(lf);
        if (errors.length === 0) {
            console.log(`验证通过`);
        }
    });
}

