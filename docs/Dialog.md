## Dialog

``Dialog``组件用于吸引用户的注意、告知用户一些信息并引导用户做出一些选择的场景。

| 属性            | 说明                                                       | 数据类型           | 默认值 |
| --------------- | ---------------------------------------------------------- | ------------------ | ------ |
| title           | 弹窗的标题，支持文本或者子组件，如果设置为空则不显示Header | react node         | -      |
| children        | 内容主题，文本或者子组件                                   | react node         | -      |
| cancelContent   | 取消弹窗按钮显示的内容                                     | react node         | '取消' |
| onCancel        | 取消弹窗的回掉函数                                         | function           | -      |
| confirmContent  | 确认弹窗按钮显示的内容                                     | react node         | '确定' |
| onConfirm       | 确认弹窗的回掉函数                                         | function           | -      |
| visible         | 当前弹窗是否可见，通过动画效果来切换弹窗的显示与隐藏       | bool               | false  |
| onShow          | 弹窗彻底显示之后执行的回掉函数                             | function           | -      |
| onDismiss       | 弹窗彻底隐藏之后执行的回掉函数                             | function           | -      |
| showDuration    | 由隐藏切换到显示时的动画时长（单位：ms）                   | number             | 200    |
| dismissDuration | 由显示切换到隐藏时的动画时长（单位：ms）                   | number             | 100    |
| style           | 弹窗可见部分容器的样式                                     | object \| moduleId | -      |
| contentStyle    | 弹窗内容区域的容器样式                                     | object \| moduleId | -      |

