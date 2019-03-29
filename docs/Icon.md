## Icon

``Icon``属于语义化信息比较明显的一种UI元素，一般用于表示某种操作，比如：首页、关闭、回退等，在这里我们将默认提供一套字体图标，并支持不同的显示尺寸，同时也支持多种自定义图标的显示。

| 属性    | 说明                                                   | 数据类型           | 默认值   |
| ------- | ------------------------------------------------------ | ------------------ | -------- |
| type    | 图标的类型，用于指定需要显示的字体图标                 | string             | -        |
| size    | 图标显示的大小，支持：``small``、``normal``、``large`` | string             | 'normal' |
| source  | 在未设置type的情况下，通过source自定义需要显示的图标   | 同 ImageView       | -        |
| style   | 定义图标的显示样式                                     | object \| moduleId | -        |
| onPress | 点击图标时的回掉函数                                   | function           | -        |
