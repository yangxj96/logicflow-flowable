import {attrs} from './utils'

export function processToXml(
    processId: string,
    name: string,
    body: string
) {
    return `
  <bpmn:process id="${processId}" name="${name}" isExecutable="true">
${body}
  </bpmn:process>`
}
