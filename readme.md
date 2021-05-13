# 网页 Shell 模拟器

在网页中模拟 shell 的组件，原生 JS 实现。

## 使用

复制`dist`目录下的`index.js`到代码中，使用 cjs 或 script 方式（注入类`WebShellSimulator`）引入。

```js
const WebShellSimulator = require('./dist/index.js')
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
