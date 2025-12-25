import { NodeBehavior } from "../../../types";

export const InclusiveGatewayBehavior: NodeBehavior = {
    allowIn: true,
    allowOut: true,
    minIn: 1,

    edge: {
        mustHaveCondition: true
    },

    validate({ outCount }) {
        if (outCount < 2) {
            return "排他网关至少需要两条出线";
        }
    }
};
