## TextInput

``TextInput``将基于React Native提供的``TextInput``进行二次封装，除了官方提供的属性之外，额外提供如下属性：

| 属性名      | 说明                                                         | 数据类型         | 默认值 |
| ----------- | ------------------------------------------------------------ | ---------------- | ------ |
| style       | 外层容器自定义样式                                           | style            | -      |
| type        | 枚举类型，支持：``text``、``number``、``phone``、``email``、``idCard``、``password`` | string           | text   |
| placeholder | 默认显示的提示文案                                           | string           | -      |
| hintStyle   | placeholder文案的显示样式                                    | style            | -      |
| required    | 是否是必填项                                                 | bool             | true   |
| validator   | 数据校验规则                                                 | function         | -      |
| autoClear   | 文本框在获取焦点的时候是否显示``清除``图标                   | bool             | false  |
| ref         | 通过React.forwardRef技术实现的ref属性，指向内部的``TextInput`` | object           | -      |
| value       | 文本框的内容，``Input``设计为``Controlled Component``，其内容严格通过``value``控制 | string \| number | -      |
| onChange    | 文本框内容发生变化的时候执行该回调函数                       | function         | -      |

考虑到大部分场景下，``TextInput``都会作为表单元素且存在在做数据校验的时候会存在非常多的依赖关系，如：

1）文本框A的显示与否由另一个文本框的内容控制；

2）文本框A的值不能和文本框B的值相同；

所以，在实现的过程中，会通过``Form``来封装并将``Form``引用设置到``context``中方便所有的表单元素进行访问。

