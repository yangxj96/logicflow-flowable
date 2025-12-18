import { sequenceFlowToXml } from "./sequence-flow";

/**
 * 连接线节点转BPMN格式的XML字符串
 * @param edge 连接线节点
 */
export function edgeToXml(edge: any): string {
    return sequenceFlowToXml(edge);
}
