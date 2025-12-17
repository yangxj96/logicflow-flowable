import type LogicFlow from "@logicflow/core";
import { getProcessContext } from "../../context/process";

export function processToXml(lf: LogicFlow, body: string) {
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
