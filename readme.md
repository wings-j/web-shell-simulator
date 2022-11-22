# web-shell-simulator

A tool for simulating shell in browser.

## Usage

Install:

```sh
npm install --save-dev @wings-j/web-shell-simulator
```

You can use this as ESM or IIFE:

```ts
import WebShellSimulator from '@wings-j/web-shell-simulator'
```

```html
<script src="./dist/index.umd.js"></script>
```

## Demo

[https://wingsj0.github.io/web-shell-simulator](https://wingsj0.github.io/web-shell-simulator/)

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

#### `new WebShellSimulator(config, style)`

Parameters：

- `config`：Configuration
  - `mouse`：enable mouse event
- `style`：style, CSS map

- `dom`：DOM
- `elements`：all elements

#### `mount(selector: string): void`

Mount the element to document.

参数：

- `selector`：selector

#### `clear(): void`

Clear lines.

#### `addBlank(): { element: Blank, promise: Promise<void>}`

Add of blank line.

Return:

- `element`: the line element
- `promise`: the promise of the action

#### `addLine(text: string, config: {color: string, typing: boolean, typingPeriod: number, html: string}): {element: Line, promise: Promise<void>}`

Add a text line.

Parameters：

- `text`：text
- `config`：configuration
  - `color`：color of the text
  - `typing`：whether to enable typing aniation
  - `typingPeriod`：typing aniation duration
  - `html`：render as HTML

Return：

- `element`: the line element
- `promise`: the promise of the action

#### `addInput(config: {color: string, prefix: string, padding: number, value: string, callback: Function, removeOnEnter: boolean}): {element: Input, promise: Promise<string>}`

Add a input line.

参数：

- config：configuration
  - color: color
  - prefix: prefix
  - padding: left padding
  - value: preset value
  - callback: callback invoked when enter typed, with the text as parameter
  - removeOnEnter: remove this line after enter

Return：

- `element`: the line element
- `promise`: the promise of the action

#### `addSelect(selections: string[], config: {color: string, multi: boolean, singlePositive: string, singleNegative: string, multiPositive: string, multiNegative: string, padding: number, callback: Function, removeOnEnter: boolean}): {element: Select, promise: Promise<string|string[]>}`

Add a select line.

Parameters：

- config：config
  - color：color
  - multi：multiply selecting
  - singlePositive：prefix of the selected selection for single selecting
  - singleNegative: prefix of the unselected selection for single selecting
  - multiPositive：prefix of the selected selection for multiply selecting
  - multiNegative：prefix of the selected selection for multiply selecting
  - padding：left padding
  - callback: callback invoked when enter typed, with the selected selection as parameter
  - removeOnEnter: remove this line after enter

Return：

- `element`: the line element
- `promise`: the promise of the action

#### `addTable(data: (string|number)[][], config: {color: string, padding: number}): {element: Table, promise: Promise<void>}`

Add a table line.

Parameters：

- data：data
- config：config
  - color：color
  - padding：left padding

Return：

- `element`: the line element
- `promise`: the promise of the action

### Element

All 'add' methods returns a `Element` subclass instance.

- dom：DOM
- active：state

#### `mount(): void`

Mount the element.

#### `remove(): void`

Remove the element.
