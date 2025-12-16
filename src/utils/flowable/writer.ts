import {nodeToXml} from './nodes'
import {edgeToXml} from './edges'
import {processToXml} from './process'
import {attrs} from './utils'

import {BPMN_NS, BPMN_PREFIX, FLOWABLE_NAMESPACE} from '../../core/constants'

const DEFINITIONS_ATTR = {
    [`xmlns:${BPMN_PREFIX}`]: BPMN_NS,
    'xmlns:flowable': FLOWABLE_NAMESPACE,
    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance'
}


export function toBpmnXml(lfData: any) {
    const {nodes = [], edges = []} = lfData

    const nodeXml = nodes.map(nodeToXml).join('\n')
    const edgeXml = edges.map(edgeToXml).join('\n')

    const processXml = processToXml(
        'process_1',
        'Demo Process',
        `    ${nodeXml}\n    ${edgeXml}`
    )

    return `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions${attrs(DEFINITIONS_ATTR)}>
${processXml}
</bpmn:definitions>`
}
