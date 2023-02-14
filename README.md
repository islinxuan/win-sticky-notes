# win-sticky-notes

模仿 Windows 便笺应用。

这个项目旨在练习在 React 中描述 UI、管理 state 以及响应事件。通过 lifting state [在组件之间共享 state](https://beta.react.jscn.org/learn/sharing-state-between-components)，拥有了 single source of truth，根据 state 变化不断更新 UI 的不同部分变得更加容易！

Features：

- 利用 useReducer 整合组件 state 更新逻辑

- 基于 CSS 自定义属性实现深浅色模式切换

- 基于 HTML Drag 和 Drog API 实现拖拽排序

- 自定义 useStorageState 实现 state 本地存储

- 自定义 useDebouncedValue 对搜索框输入防抖
