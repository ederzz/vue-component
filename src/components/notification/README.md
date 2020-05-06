# notification

通知提醒组件。根据组件`notices`循环渲染组件`Notice`。

## notice

`close`事件设计：清理定时器、调用`onClose`事件，父元素清理`notices`数组。
