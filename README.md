# logicflow-flowable

# 面板使用方式

```javascript
import LogicFlow from "@logicflow/core";
import { registerPropertyPanel } from "@yangxj96/logicflow-flowable/panel";

const lf = new LogicFlow({
  container: document.querySelector("#lf"),
  width: 800,
  height: 600,
});

const panelContainer = document.querySelector("#panel-container")!;
registerPropertyPanel({ lf, container: panelContainer });
```
