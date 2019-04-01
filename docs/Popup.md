## Popup

``Popup``一般表示从屏幕底部向上通过动画滑出并显示需要展示的标题以及内容。

| 属性名          | 说明                         | 数据类型           | 默认值 |
| --------------- | ---------------------------- | ------------------ | ------ |
| style           | 容器外围样式                 | object \| moduleId | -      |
| title           | 显示的标题内容               | string \| element  | -      |
| cancelContent   | 左侧取消按钮的内容           | string \| element  | -      |
| onCancel        | 点击取消按钮时的回调函数     | function           | -      |
| confirmContent  | 右侧确认按钮的内容           | string \| element  | -      |
| onConfirm       | 点击确认按钮时的回调函数     | function           | -      |
| onShow          | 完全显示后执行的回调函数     | function           | -      |
| onDismiss       | 完全隐藏后执行的回调函数     | function           | -      |
| showDuration    | 显示动画持续时长，单位：毫秒 | number             | 200    |
| dismissDuration | 隐藏动画持续时长，单位：毫秒 | number             | 200    |
| contentStyle    | 内容区域的样式               | object \| moduleId | -      |
| maskClosable    | 蒙版点击的时候是否隐藏组件   | bool               | false  |

