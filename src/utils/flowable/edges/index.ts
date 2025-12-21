import { sequenceFlowToXml } from "./sequence-flow";
import LogicFlow from "@logicflow/core";

/**
 * 连接线节点转BPMN格式的XML字符串
 * @param edge 连接线节点
 */
export function edgeToXml(edge: LogicFlow.EdgeData): string {
    return sequenceFlowToXml(edge);
}
