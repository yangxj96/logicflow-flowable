import { sequenceFlowToXml } from './sequence-flow'

export function edgeToXml(edge: any): string {
    return sequenceFlowToXml(edge)
}
