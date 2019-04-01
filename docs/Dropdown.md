## Dropdown

``DropDown``用于描述从屏幕顶部动画滑出内容展示的场景。

| 属性名          | 说明                                                      | 数据类型           | 默认值 |
| --------------- | --------------------------------------------------------- | ------------------ | ------ |
| style           | 外层容器区域样式定制                                      | object \| moduleId | -      |
| contentStyle    | 内容区域样式定制                                          | object \| moduleId | -      |
| onClose         | 点击右上角关闭按钮或者蒙版（maskClosable=true）的回调函数 | function           | -      |
| onShow          | 完全显示之后执行的回调函数                                | function           | -      |
| onDismiss       | 完全隐藏之后执行的回调函数                                | function           | -      |
| showDuration    | 显示动画的持续时长                                        | number             | 200ms  |
| dismissDuration | 隐藏动画的持续时长                                        | number             | 200ms  |
| maskClosable    | 点击蒙版是否表示隐藏组件                                  | bool               | false  |

