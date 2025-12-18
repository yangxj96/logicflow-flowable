/**
 * Flowable 表单校验规则
 */
export const flowableRules = {
    /**
     * 受让人校验规则
     */
    flowableAssignee: {
        name: "flowableAssignee",
        validate(value: any) {
            if (!value) return null;
            if (value.includes(",") && !value.startsWith("${")) {
                return "处理人不支持多个固定值";
            }
            return null;
        }
    },

    /**
     * 候选人校验规则
     */
    flowableCandidate: {
        name: "flowableCandidate",
        validate(value: any) {
            if (!value) return null;
            if (value.includes(" ")) {
                return "候选人请使用逗号分隔";
            }
            return null;
        }
    }
};
