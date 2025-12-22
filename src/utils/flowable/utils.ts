import { Property, XmlMeta } from "../../types";
import LogicFlow from "@logicflow/core";

/**
 * 根据节点/边的数据和属性定义，生成两部分 XML 内容
 *
 * attrs: 要附加到当前 XML 标签上的属性（如 id="task1"）
 *
 * elements: 要作为子元素插入的 XML 字符串数组（如 <extensionElements>...</extensionElements>）
 *
 * @param node 当前要序列化的节点或边数据
 * @param properties 该类型节点/边支持的所有属性元数据（含如何转 XML 的规则）
 */
export function buildXmlParts(
    node: LogicFlow.NodeData | LogicFlow.EdgeData,
    properties: Property[]
): {
    attrs: Record<string, string>;
    elements: string[];
} {
    const attrs: Record<string, string> = {};
    const elements: string[] = [];
    const values = node.properties || {};

    for (const prop of properties) {
        if (!prop.xml) continue;

        const rawValue = values[prop.key];
        const value = resolveValue(rawValue);
        if (value === undefined) continue;

        // xml 可以是函数（动态生成）
        const meta = typeof prop.xml === "function" ? prop.xml(value, node) : prop.xml;

        if (!meta) continue;

        collectXml(meta, value, attrs, elements);
    }

    return { attrs, elements };
}

/**
 * 标准化属性值：过滤掉无意义的空值
 * @param value
 */
function resolveValue(value: any) {
    if (value === undefined || value === null) return undefined;
    if (value === "") return undefined;
    return value;
}

/**
 * 根据 XmlMeta 的配置，决定把当前属性写成 XML 属性（attr） 还是 XML 子元素（element）
 * @param meta XML 生成规则
 * @param value 已清洗的实际值
 * @param attrs 引用传递，用于收集属性
 * @param elements 引用传递，用于收集子元素
 */
function collectXml(meta: XmlMeta, value: any, attrs: Record<string, string>, elements: string[]) {
    // attribute
    if (meta.attr) {
        const attr = buildAttr(meta, value);
        if (attr) {
            attrs[attr.name] = attr.value;
        }
    }

    // element（可能递归）
    if (meta.element) {
        const element = renderElement(meta, value);
        if (element) {
            elements.push(element);
        }
    }
}

/**
 * 将一个 XmlMeta + 值 渲染为完整的 XML 元素字符串（如 <flowable:assignee>user1</flowable:assignee>）
 * @param meta XML 元素描述
 * @param value 要写入的内容
 */
function renderElement(meta: XmlMeta, value: any): string | null {
    const name = meta.namespace ? `${meta.namespace}:${meta.element}` : meta.element!;

    const attrs = renderElementAttrs(meta.elementAttrs);

    // 结构型节点（children 优先）
    if (meta.children && meta.children.length > 0) {
        const childrenXml = meta.children
            .map(child => renderElement(child, value))
            .filter(Boolean)
            .join("");

        return `<${name}${attrs}>${childrenXml}</${name}>`;
    }

    const kind = meta.kind || "text";

    switch (kind) {
        case "empty":
            return value === true ? `<${name}${attrs} />` : null;

        case "text":
            return `<${name}${attrs}>${escapeXml(String(value))}</${name}>`;

        case "cdata":
            return `<${name}${attrs}><![CDATA[${value}]]></${name}>`;

        case "raw":
            return String(value);

        default:
            return null;
    }
}

/**
 * 将一个属性对象（如 { key: "value" }）转为 XML 属性字符串： key="value"
 * @param attrs 属性对象
 */
function renderElementAttrs(attrs?: Record<string, string>): string {
    if (!attrs) return "";

    return Object.entries(attrs)
        .map(([key, value]) => ` ${key}="${escapeXml(String(value))}"`)
        .join("");
}

/**
 * 为 meta.attr 生成一个属性名-值对
 * @param xml 元数据
 * @param value 值
 */
function buildAttr(xml: XmlMeta, value: any): { name: string; value: string } | null {
    if (!xml.attr) return null;

    const name = xml.namespace ? `${xml.namespace}:${xml.attr}` : xml.attr;

    return {
        name,
        value: String(value)
    };
}

/**
 * XML属性转字符串
 * @param attrs 属性
 */
export function attrsToString(attrs: Record<string, any> = {}): string {
    return Object.entries(attrs)
        .filter(([, value]) => value !== undefined && value !== null && value !== "")
        .map(([key, value]) => {
            if (typeof value === "boolean") {
                return ` ${key}="${value ? "true" : "false"}"`;
            }
            return ` ${key}="${escapeXml(String(value))}"`;
        })
        .join("");
}

/**
 * 对xml特殊字符串替换转义
 * @param str xml字符串
 */
export function escapeXml(str: string) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
