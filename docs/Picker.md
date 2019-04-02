## Picker

``Picker``用于从列表中选择对应的数据项，支持单项数据选择以及多项级联选择（比如：省市区选择等）

| 属性名          | 说明                                               | 数据类型                  | 默认值 |
| --------------- | -------------------------------------------------- | ------------------------- | ------ |
| style           | 外层容器样式                                       | style                     | -      |
| contentStyle    | 列表内容自定义样式                                 | style                     | -      |
| value           | 默认选中的数据（如果是级联，则为array类型）        | string \| number \| array | -      |
| dataSource      | 列表源数据，支持单项数据以及级联数据，最多三层联动 | array                     | -      |
| title           | 数据列表显示的标题文案或者自定义节点               | string \| element         | -      |
| cancelContent   | 取消按钮文本或自定义节点                           | string \| element         | '取消' |
| onCancel        | 取消按钮点击时的回调                               | function                  | -      |
| confirmContent  | 确认按钮文本或自定义节点                           | string \| element         | '确定' |
| onConfirm       | 确认按钮点击时的回调                               | function                  | -      |
| renderItem      | 返回需要渲染的每一项数据展示内容的方法             | function                  | -      |
| onChange        | 当选中的内容发生变化的时候执行该回调函数           | function                  | -      |
| onShow          | 完全显示之后执行的回调函数                         | function                  | -      |
| onDismiss       | 完全隐藏之后执行的回调函数                         | function                  | -      |
| showDuration    | 显示动画时长                                       | number                    | 200ms  |
| dismissDuration | 隐藏动画时长                                       | number                    | 100ms  |

其中，dataSource的数据格式如下：

```javascript
[{
  value: '',
  content: '',
  children: [{
    value: '',
  	content: ''
  }...]
}...]
```

