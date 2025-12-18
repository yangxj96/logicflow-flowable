import type LogicFlow from "@logicflow/core";
import { getProcessContext } from "../../context/process";

/**
 * 流程节点转BPMN格式的XML字符串
 * @param lf {@link LogicFlow} 实例对象
 * @param body 其他节点字符串
 */
export function processToXml(lf: LogicFlow, body: string): string {
    const process = getProcessContext(lf);
    return `
  <bpmn:process
    id="${process.id}"
    name="${process.name}"
    isExecutable="${process.isExecutable}"
  >
${body}
  </bpmn:process>`;
}
