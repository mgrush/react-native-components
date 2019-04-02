## Checkbox

| 属性名   | 说明                         | 数据类型 | 默认值 |
| -------- | ---------------------------- | -------- | ------ |
| checked  | 是否选中状态                 | bool     | false  |
| disabled | 是否是不可操作状态           | bool     | false  |
| style    | 外层容器样式                 | style    | -      |
| onChange | 选中状态发生变化后的回调函数 | function | -      |

#### Checkbox.Contract

很多情况下我们都会使用``checkbox``来要求用户阅读并且同意相关的协议，为此特意为这一场景做了一次封装，其属性在 ``Checkbox``的基础上做如下的扩展：

| 属性名       | 说明                                | 数据类型 | 默认值 |
| ------------ | ----------------------------------- | -------- | ------ |
| contractUrl  | 协议链接                            | string   | -      |
| contractName | 协议名称                            | string   | -      |
| onPress      | 点击协议后的回调，默认跳转到webview | function | -      |

