# 网页 Shell 模拟器

在网页中模拟 shell 的工具。

## 安装

```sh
npm install --save-dev @wings-j/web-shell-simulator
```

## 使用

复制`dist`目录下的`index.js`到代码中，使用 esm 或 script 方式（注入类`WebShellSimulator`）引入。

```ts
import WebShellSimulator from '@wings-j/web-shell-simulator'
```

```html
<script src="./dist/index.umd.js"></script>
```

## 示例

[Demo](https://wingsj0.github.io/web-shell-simulator/)

```ts
let shell = new WebShellSimulator({}, { overflow: 'hidden', width: '100%', height: '100%', 'padding-bottom': '100px', 'font-size': '16px' })

document.addEventListener('DOMContentLoaded', () => {
  shell.mount('body')
})

let res

shell.addLine('Web Shell Simulator', { color: '#2266ff' })
shell.addBlank()
shell.addLine('Input something, confirm with enter ...')
res = await shell.addInput().promise
shell.addLine(`Input result: ${res}`)
shell.addLine('Select one, move with up and down ...')
res = await shell.addSelect(['a', 'b', 'c']).promise
shell.addLine(`Select result: ${res}`)
shell.addLine('Select some, check with space ...')
res = await shell.addSelect(['a', 'b', 'c'], { multi: true }).promise
shell.addLine(`Select result: ${res.join(', ')}`)
```

## API

### WebShellSimulator

#### 属性

- dom：DOM
- elements：所有元素集合

#### 构造方法

```ts
new WebShellSimulator(config, style)
```

参数：

- config：配置
  - mouse：使能鼠标点击事件
- style：样式。CSS 属性对象。

#### 挂载

```ts
mount(selector: string): void
```

参数：

- selector：选择器

#### 清空

```ts
clear(): void
```

#### 添加空行

```ts
addBlank(): { element: Blank }
```

返回：

- element：元素

#### 添加文本行

```ts
addLine(text: string, config): {element: Line}
```

参数：

- text：字符串。文本
- config：配置
  - color：字符串。颜色
  - typing：布尔。打字动画
  - typingPeriod：数字。打字动画周期

返回：

- element：元素

#### 添加输入

```ts
addInput(config): {element: Input}
```

参数：

- config：配置
  - color: 颜色
  - prefix: 前缀
  - padding: 前缀后边距
  - value: 预设值
  - callback: 回调。传递输入值
  - removeOnEnter: 回车后移除

返回：

- element：元素
- promise：输入 Promise

#### 添加选择

```ts
addSelect(selections: string[], config): {element: Select}
```

参数：

- config：配置
  - color：颜色
  - multi：是否多选
  - singlePositive：单选选中前缀
  - singleNegative：单选未选中前缀
  - multiPositive：多选选中前缀
  - multiNegative：多选未选中前缀
  - padding：左边距
  - callback: 回调。传递选中的选项
  - removeOnEnter: 回车后移除

返回：

- element：元素
- promise：选择 Promise

#### 添加表格

```ts
addTable(data: (string|number)[][], config): {element: Table}
```

参数：

- data：数据
- config：配置
  - color：字符串。颜色
  - padding：单元格右边距

返回：

- element：元素

### Element

所有添加方法返回 Element 的子类（Line，Blank 等）。

#### 属性

- dom：DOM
- active：激活状态

#### 挂载元素

```ts
mount(): void
```

#### 删除元素

```ts
remove(): void
```
