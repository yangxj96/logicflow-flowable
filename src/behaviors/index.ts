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
        const result = engine.validateEdge(data.id);

        if (!result.valid) {
            lf.deleteEdge(data.id);
            ElMessage.warning(result.message);
        }
    });

    lf.on("node:add", ({ data }) => {
        const result = engine.validateNode(data.id);

        if (result) {
            lf.deleteEdge(data.id);
            for (let valid of result) {
                ElMessage.warning(valid.message);
            }
        }
    });
}

