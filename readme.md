# 网页 Shell 模拟器

在网页中模拟 shell 的工具。

## 安装

```sh
npm install --save-dev @wings-j/web-shell-simulator
```

## 使用

复制`dist`目录下的`index.js`到代码中，使用 esm 或 script 方式（注入类`WebShellSimulator`）引入。

```js
import WebShellSimulator from '@wings-j/web-shell-simulator'
```

```html
<script src="./dist/index.umd.js"></script>
```

## 示例

[Demo](https://wingsj0.github.io/web-shell-simulator/)

```js
// todo
```

## API

### WebShellSimulator

#### 构造方法

```js
new WebShellSimulator(config, style)
```

参数：

- config：配置
- style：样式。CSS 属性对象。

#### 挂载

```js
mount(selector: string): void
```

参数：

- selector：选择器

#### 添加空行

```js
addBlank(): Blank
```

返回：

- Blank

#### 添加文本行

```js
addLine(text: string, config): Line
```

参数：

- text：字符串。文本
- config：配置
  - color：字符串。颜色
  - prefix：布尔。显示前缀
  - typing：布尔。打字动画
  - typingPeriod：数字。打字动画周期

返回：

- Line

### Element

所有添加方法返回 Element 的子类（Line，Blank 等）。

#### 挂载元素

```js
mount(): void
```

#### 删除元素

```js
remove(): void
```
