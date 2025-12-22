import { DiamondNodeModel } from "@logicflow/core";

/**
 * 网关通用基类模型
 */
export class GatewayBaseModel extends DiamondNodeModel {

    override initNodeData(data: any) {
        super.initNodeData(data);

        this.setProperties({
            rx: 24,
            ry: 24
        });
    }

}
