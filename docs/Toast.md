## Toast

``Toast``承载了App中几乎所有的通知类消息的展示，包括：成功消息、错误消息、普通消息等

| 属性名          | 说明                                                  | 属性类型           | 默认值 |
| --------------- | ----------------------------------------------------- | ------------------ | ------ |
| type            | 消息的类型，``succ``、``error``、``normal``、``info`` | string             | normal |
| style           | 外层容器的样式                                        | object \| moduleId | -      |
| duration        | 消息显示的时长，单位：ms                              | number             | 2000   |
| onShow          | 完全显示后执行的回调函数                              | function           | -      |
| onDismiss       | 完全隐藏后执行的回调函数                              | function           | -      |
| showDuration    | 显示动画持续的时长                                    | number             | 200ms  |
| dismissDuration | 隐藏动画持续的时长                                    | number             | 200ms  |
| children        | 支持文本或者自定义节点类型                            | string \| element  | -      |

当然，大部分涉及到需要使用``Toast``的场景都是在某项操作成功或者失败之后给予用户对应的反馈，这里从研发体验上来说，我们可能更喜欢如下API的调用方式：

```javascript
Toast.succ('操作成功', {
  duration: 3000,
  showDuration: 200,
  dismissDuration: 100,
  onShow: () => {},
  onDismiss: () => {}
});
```



