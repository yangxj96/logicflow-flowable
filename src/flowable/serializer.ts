type LFNode = {
    id: string
    type: string
    text?: { value: string }
    properties?: Record<string, any>
}

type LFEdge = {
    id: string
    type: string
    sourceNodeId: string
    targetNodeId: string
}

export function toFlowableXml(
    nodes: LFNode[],
    edges: LFEdge[]
): string {
    const startEvents = nodes.filter(
        n => n.type === 'bpmn:startEvent'
    )

    const endEvents = nodes.filter(
        n => n.type === 'bpmn:endEvent'
    )

    const userTasks = nodes.filter(
        n => n.type === 'bpmn:userTask'
    )

    const sequenceFlows = edges.filter(
        e => e.type === 'bpmn:sequenceFlow'
    )

    return `
<definitions
  xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL"
  xmlns:flowable="http://flowable.org/bpmn"
>
  <process id="Process_1">

    ${startEvents.map(
        e => `<startEvent id="${e.id}" />`
    ).join('\n')}

    ${userTasks.map(t => `
      <userTask
        id="${t.id}"
        name="${t.text?.value || ''}"
        ${t.properties?.assignee
        ? `flowable:assignee="${t.properties.assignee}"`
        : ''}
      />
    `).join('\n')}

    ${endEvents.map(
        e => `<endEvent id="${e.id}" />`
    ).join('\n')}

    ${sequenceFlows.map(
        f => `<sequenceFlow
        id="${f.id}"
        sourceRef="${f.sourceNodeId}"
        targetRef="${f.targetNodeId}"
      />`
    ).join('\n')}

  </process>
</definitions>
`.trim()
}
