import { LogicFlow } from "@logicflow/core";
import { registerExclusiveGateway } from "./exclusive-gateway";

/**
 * 注册所有网关节点
 *
 * @param lf {@link LogicFlow} 实例对象
 */
export function registerGatewayNodes(lf: LogicFlow) {
    registerExclusiveGateway(lf);
}
