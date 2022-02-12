/**
 * 配置
 */
const preset$5 = {
    mouse: false
};

/**
 * 样式
 */
const preset$4 = {
    overflow: 'auto',
    color: '#333',
    padding: '1em',
    boxSizing: 'border-box',
    background: 'white',
    fontSize: '14px',
    fontFamily: '"Courier New", Courier, monospace',
    lineHeight: 1.5
};

/**
 * 元素
 */
/**
 * 元素
 */
class Element {
    context;
    dom = document.createElement('div');
    active = true;
    /**
     * 构造方法
     * @param context 上下文
     */
    constructor(context) {
        this.context = context;
    }
    /**
     * 销毁
     */
    destroy() { }
    /**
     * 挂载
     */
    mount() {
        this.context.dom.appendChild(this.dom);
        this.context.elements.push(this);
    }
    /**
     * 删除
     */
    remove() {
        this.dom.remove();
        this.destroy();
        let i = this.context.elements.indexOf(this);
        if (i > -1) {
            this.context.elements.splice(i, 1);
        }
    }
    /**
     * 聚焦
     * @description 重载
     */
    focus() { }
    /**
     * 失焦
     * @description 重载
     */
    blur() { }
}

/**
 * 空行
 */
/**
 * 类
 */
class Blank extends Element {
    name = 'blank';
    /**
     * 构造方法
     * @param context 上下文
     */
    constructor(context) {
        super(context);
        let br = document.createElement('br');
        this.dom.appendChild(br);
    }
}

/**
 * 行
 */
const preset$3 = {
    color: '',
    typing: false,
    typingPeriod: 30,
    typingCallback: () => { },
    html: false
};
/**
 * 打字
 * @param dom 元素
 * @param text 文本
 * @param period 单字周期
 */
async function type(dom, text, period = preset$3.typingPeriod) {
    return new Promise(resolve => {
        for (let i = 0; i <= text.length; i++) {
            setTimeout(() => {
                dom.innerText = text.slice(0, i);
                if (i === text.length) {
                    resolve();
                }
            }, period * i);
        }
    });
}
/**
 * 行
 */
class Line extends Element {
    name = 'line';
    config;
    $text;
    /**
     * 构造方法
     * @param context 上下文
     * @param text 文本
     * @param config 配置
     */
    constructor(context, text, config) {
        super(context);
        this.config = Object.assign({}, preset$3, config);
        let span = document.createElement('span');
        if (this.config.typing) {
            type(span, text, this.config.typingPeriod).then(() => {
                config?.typingCallback?.();
            });
        }
        else {
            if (this.config.html) {
                span.innerHTML = text;
            }
            else {
                span.innerText = text;
            }
        }
        span.style.color = this.config.color || '';
        this.$text = span;
        this.dom.appendChild(span);
    }
    /**
     * 更新
     * @param text 文本
     */
    update(text) {
        this.$text.innerText = text;
    }
}

/**
 * 输入
 */
const preset$2 = {
    color: 'inherit',
    prefix: '>',
    padding: 10,
    value: '',
    callback: () => { },
    removeOnEnter: false,
    allowEmpty: false
};
const style$1 = {
    display: 'flex',
    alignItems: 'center'
};
const spanStyle = {
    flexShrink: '0',
    whiteSpace: 'pre'
};
const inputStyle = {
    width: '100%',
    border: 'none',
    outline: 'none',
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    wordSpacing: 'inherit',
    letterSpacing: 'inherit',
    backgroundColor: 'inherit'
};
/**
 * 类
 */
class Input extends Element {
    name = 'input';
    _active;
    config;
    $input;
    /**
     * 构造方法
     * @param context 上下文
     */
    constructor(context, config) {
        super(context);
        this._active = this.active;
        this.config = Object.assign({}, preset$2, config);
        Object.assign(this.dom.style, style$1);
        let span = document.createElement('span');
        span.innerText = this.config.prefix;
        Object.assign(span.style, spanStyle, { color: this.config.color });
        let input = document.createElement('input');
        Object.assign(input.style, inputStyle, { marginLeft: this.config.padding + 'px' });
        input.value = this.config.value;
        input.addEventListener('keyup', this.handle_keyup.bind(this));
        this.$input = input;
        this.dom.appendChild(span);
        this.dom.appendChild(input);
        Object.defineProperty(this, 'active', {
            set(v) {
                this._active = v;
                this.$input.disabled = !v;
            },
            get() {
                return this._active;
            }
        });
    }
    /**
     * 处理键盘弹起
     * @param ev 事件
     */
    handle_keyup(ev) {
        if (ev.code === 'Enter' && (this.$input.value || this.config.allowEmpty)) {
            this.enter();
        }
    }
    /**
     * 挂载
     */
    mount() {
        super.mount();
        setTimeout(() => {
            this.$input.focus();
        });
    }
    /**
     * 聚焦
     */
    focus() {
        this.$input.focus();
    }
    /**
     * 失焦
     */
    blur() {
        this.$input.blur();
    }
    /**
     * 回车
     */
    enter() {
        this.active = false;
        this.config.callback(this.$input.value.trim());
        if (this.config.removeOnEnter) {
            this.remove();
        }
    }
}

/**
 * 单选
 */
const preset$1 = {
    color: 'inherit',
    multi: false,
    singlePositive: '* ',
    singleNegative: '  ',
    multiPositive: '[*] ',
    multiNegative: '[ ] ',
    padding: 20,
    callback: () => { },
    removeOnEnter: false
};
const style = {
    whiteSpace: 'pre',
    outline: 'none'
};
const class_pointer = 'web-shell-simulator_pointer';
/**
 * 类
 */
class Select extends Element {
    name = 'select';
    config;
    selections = [];
    $selections = [];
    length = 0;
    index = 0;
    indexes = [];
    /**
     * 构造方法
     * @param context 上下文
     * @param selections 选项
     * @param config 配置
     */
    constructor(context, selections, config) {
        super(context);
        this.config = Object.assign({}, preset$1, config);
        Object.assign(this.dom.style, style, { color: this.config.color, paddingLeft: this.config.padding + 'px' });
        this.length = selections.length;
        this.selections = selections;
        this.indexes = new Array(selections.length).fill(false);
        for (let a of selections) {
            let div = document.createElement('div');
            if (this.context.config.mouse) {
                div.addEventListener('click', this.handle_click.bind(this, a));
            }
            let pointer = document.createElement('span');
            pointer.classList.add(class_pointer);
            pointer.innerText = this.config.singleNegative;
            let content = document.createElement('span');
            content.innerText = a;
            div.appendChild(pointer);
            div.appendChild(content);
            this.dom.appendChild(div);
            this.$selections.push(div);
        }
        this.render();
        this.dom.tabIndex = -1;
        setTimeout(this.focus.bind(this));
        this.dom.addEventListener('keyup', this.handle_keyUp.bind(this));
    }
    /**
     * 处理键盘弹起
     * @param ev 事件
     */
    handle_keyUp(ev) {
        if (this.active) {
            if (ev.code === 'ArrowUp') {
                this.up();
            }
            else if (ev.code === 'ArrowDown') {
                this.down();
            }
            else if (this.config.multi && ev.code === 'Space') {
                this.space();
            }
            else if (ev.code === 'Enter') {
                this.enter();
            }
        }
    }
    /**
     * 处理点击
     * @param selection 选项
     */
    handle_click(selection) {
        if (this.active) {
            this.index = this.selections.indexOf(selection);
            if (this.config.multi) {
                this.indexes[this.index] = !this.indexes[this.index];
            }
            this.render();
        }
    }
    /**
     * 渲染
     */
    render() {
        for (let i = 0; i < this.indexes.length; i++) {
            let element = this.$selections[i];
            element.style.textDecoration = i === this.index ? 'underline' : 'none';
            let pointer = element.querySelector('.' + class_pointer);
            if (pointer) {
                if (this.config.multi) {
                    pointer.innerText = this.indexes[i] ? this.config.multiPositive : this.config.multiNegative;
                }
                else {
                    pointer.innerText = i === this.index ? this.config.singlePositive : this.config.singleNegative;
                }
            }
        }
    }
    /**
     * 聚焦
     */
    focus() {
        this.dom.focus();
    }
    /**
     * 失焦
     */
    blur() {
        this.dom.blur();
    }
    /**
     * 回车
     */
    enter() {
        this.config.callback(this.config.multi ? this.indexes.map((a, i) => (a ? this.selections[i] : [])).flat() : this.selections[this.index]);
        this.active = false;
        if (this.config.removeOnEnter) {
            this.remove();
        }
    }
    /**
     * 空格
     */
    space() {
        this.indexes[this.index] = !this.indexes[this.index];
        this.render();
    }
    /**
     * 上
     */
    up() {
        this.index = Math.max(this.index - 1, 0);
        this.render();
    }
    /**
     * 下
     */
    down() {
        this.index = Math.min(this.index + 1, this.length - 1);
        this.render();
    }
}

/**
 * 表格
 */
const preset = {
    color: 'inherit',
    padding: 10
};
const tableStyle = {
    verticalAlign: 'top',
    wordBreak: 'break-all'
};
const tbodyStyle = {
    verticalAlign: 'inherit'
};
/**
 * 类
 */
class Table extends Element {
    name = 'table';
    config;
    /**
     * 构造方法
     * @param context 上下文
     * @param data 数据
     */
    constructor(context, data, config) {
        super(context);
        this.config = Object.assign({}, preset, config);
        Object.assign(this.dom.style, { color: this.config.color });
        let table = document.createElement('table');
        Object.assign(table.style, tableStyle);
        let tbody = document.createElement('tbody');
        Object.assign(tbody.style, tbodyStyle);
        table.appendChild(tbody);
        for (let a of data) {
            let tr = document.createElement('tr');
            for (let b of a) {
                let td = document.createElement('td');
                td.innerText = b.toString();
                td.style.paddingRight = this.config.padding + 'px';
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        this.dom.appendChild(table);
    }
}

/**
 * index
 */
/**
 * 网页Shell模拟器
 */
class WebShellSimulator {
    context;
    dom = document.createElement('div');
    elements = new Proxy([], {
        set(target, name, value) {
            for (let i = 0; i < target.length - 1; i++) {
                target[i].active = false;
            }
            return Reflect.set(target, name, value);
        }
    });
    get current() {
        return this.elements[this.elements.length - 1];
    }
    /**
     * 构造方法
     * @param config 选项
     */
    constructor(config, style) {
        this.context = { config: Object.assign({}, preset$5, config), dom: this.dom, elements: this.elements };
        Object.assign(this.dom.style, preset$4, style);
        this.dom.addEventListener('click', this.handle_focus.bind(this));
    }
    /**
     * 聚焦
     */
    handle_focus() {
        let target = this.elements[this.elements.length - 1];
        if (target && target.active) {
            target.focus();
        }
    }
    /**
     * 滚动至底部
     */
    scroll() {
        setTimeout(() => {
            this.dom.scrollTo({
                behavior: 'smooth',
                top: this.dom.scrollHeight
            });
        });
    }
    /**
     * 挂载
     * @param selector 选择器
     */
    mount(selector) {
        if (this.dom) {
            let parent = document.querySelector(selector);
            if (parent) {
                parent.appendChild(this.dom);
            }
            else {
                throw Error('没有找到容器元素');
            }
        }
    }
    /**
     * 清空
     */
    clear() {
        for (let i = this.elements.length - 1; i >= 0; i--) {
            this.elements[i].remove();
        }
    }
    /**
     * 添加空行
     * @return 元素
     */
    addBlank() {
        let element = new Blank(this.context);
        element.mount();
        this.scroll();
        return { element, promise: Promise.resolve() };
    }
    /**
     * 添加行
     * @param text 文本
     * @param config 配置
     * @return 元素
     */
    addLine(text, config) {
        let element;
        let promise = new Promise(resolve => {
            element = new Line(this.context, text, Object.assign({}, config, { typingCallback: resolve }));
            element.mount();
            this.scroll();
        });
        return { element, promise };
    }
    /**
     * 添加输入
     * @param config 配置
     * @return 元素
     */
    addInput(config) {
        let element;
        let promise = new Promise(resolve => {
            element = new Input(this.context, { ...config, callback: resolve });
            element.mount();
            this.scroll();
        });
        return { element, promise };
    }
    /**
     * 添加选择
     * @param selections 选项
     * @param config 配置
     * @return 元素
     */
    addSelect(selections, config) {
        let element;
        let promise = new Promise(resolve => {
            element = new Select(this.context, selections, { ...config, callback: resolve });
            element.mount();
            this.scroll();
        });
        return { element, promise };
    }
    /**
     * 添加表格
     * @param data 数据
     */
    addTable(data, config) {
        let element = new Table(this.context, data, config);
        element.mount();
        this.scroll();
        return { element };
    }
}

export { WebShellSimulator as default };
