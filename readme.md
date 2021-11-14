# 网页 Shell 模拟器

在网页中模拟 shell 的组件，原生 JS 实现。

示例：[https://wingsj0.github.io/web-shell-simulator/](https://wingsj0.github.io/web-shell-simulator/)

## 安装

```sh
npm install --save-dev @wings-j/web-shell-simulator
```

## 使用

复制`dist`目录下的`index.js`到代码中，使用 esm/cjs 或 script 方式（注入类`WebShellSimulator`）引入。

```js
import WebShellSimulator from '@wings-j/web-shell-simulator'
```

```html
<script src="./dist/index.js"></script>
```

## 示例

[Demo]()

```js
let shell = new WebShellSimulator({ prefix: '> ' }, { overflow: 'hidden', width: '100%', height: '100%', 'padding-bottom': '100px', 'font-size': '16px' })
shell.addLine('Welcome to Web created by WingsJ.', { prefix: false })
shell.addLine('This is the space where WingsJ shows his Web works.', { prefix: false })
shell.addLine('For more information about WingsJ, visit "http://wings-j.cn".', { prefix: false })
shell.addLine('Hope you like it.', { prefix: false })
shell.addLine('Please click the card on the left panel to check out web works.', { prefix: false, color: '#2266ff' })
```

## API

### 构造方法

`new WebShellSimulator(config, style)`

参数：

- config：配置
  - prefix：字符串。行前缀
- style：样式。CSS 属性对象。

### 添加文本行

`WebShellSimulator.addLine(text, config)`

参数：

- text：字符串。文本
- config：配置

  - color：字符串。颜色
  - prefix：布尔。显示前缀
  - typing：布尔。打字动画
  - typingPeriod：数字。打字动画周期

返回 Line 实例

### 添加空行

`WebShellSimulator.addBlank()`

返回 Blank 实例

### 元素方法

所有添加方法返回 Element 的子类。

`Element.remove()`

删除元素。
