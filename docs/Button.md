## Button

``Button``组件用于做所有需要处理用户点击事件并作出响应的场景，组件基于``TouchableOpacity``进行封装，除了所有``TouchableOpacity``的原有属性之外，还会增加以下列表中的扩展属性：

| 属性名      | 说明                                                         | 数据类型           | 默认值  |
| ----------- | ------------------------------------------------------------ | ------------------ | ------- |
| type        | 按钮类型，可选枚举值：``primay``、``success``、``danger``、``warning`` | string             | primary |
| size        | 按钮大小，可选枚举值：``small``、``normal``、``large``       | string             | normal  |
| trans       | 是否背景透明                                                 | bool               | false   |
| shape       | 按钮类型，可选枚举值：``circle``、``round``、``rect``        | string             | round   |
| leftIcon    | 按钮左侧需要显示的图标，可以是相对路径或者图片对象           | string \| object   | -       |
| rightIcon   | 按钮右侧需要显示的图标，可以是相对路径或者图片对象           | string \| object   | -       |
| onPress     | 按钮点击事件处理方法                                         | function           | -       |
| style       | 按钮自定义样式设置                                           | object \| moduleId | -       |
| disabled    | 按钮是否处于失效状态                                         | bool               | false   |
| block       | 是否是按照父节点来渲染其宽度                                 | bool               | false   |
| loading     | 是否处于loading状态，loading状态将屏蔽用户点击事件           | bool               | false   |
| bordered    | 是否显示边框，边框的颜色由``type``属性来决定                 | bool               | false   |
| loadingIcon | 处于loading状态下需要显示的Icon，同leftIcon                  | string \| object   | -       |
| rebounce    | 防重复点击，设置固定时间内只做出一次事件响应，单位：毫秒     | number             | 300     |

#### 常用方法

通过``props.children``来设置按钮显示的内容，如果是纯文案，组件内部会自动使用``Text``对其进行封装：

```html
<Button type='primary' size='normal'>
  提交信息
</Button>
```

当然，也支持做更加个性化的定制：

```html
<Button type='primary' size='normal'>
  <Text style={styles.submitButtonText}>提交信息</Text>
</Button>
```

#### 渲染图标

通常情况下，为了让用户能够更好的理解按钮的含义，我们会希望在按钮上添加一些具有语义化的图标来更好的获取用户的关注点：

```html
<Button 
  type='primary' 
  size='normal'
  leftIcon='./images/left-icon.png'>
  提交信息
</Button>
```

当然，如果按钮处于``loading``状态，则会将``leftIcon``显示为``loading``相关的图标，如果要取消这一效果，则可以通过将``loadingIcon``设置为与``leftIcon``相同即可。

#### 防重复点击

对于手机端应用，特别是在网络情况较差的情况下，按钮的重复点击引起多次发送请求的情况几乎是任何应用都需要防止的，所以，在``Button``的设计实现中会默认增加``300ms``的``Rebounce``效果，如果需要调整该数值，可以通过设置``rebounce``属性来设置：

```html
<Button type='primary' size='normal' rebounce={500}>
  提交信息
</Button>
```

