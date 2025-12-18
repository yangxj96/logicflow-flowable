// 定义统一校验规则类型（与 UI 解耦）
export interface ValidationRule {
    name: string
    validate: (value: any, context: ValidationContext) => string | null
}

export interface ValidationContext {
    nodeType: string
    allValues: Record<string, any>
}
