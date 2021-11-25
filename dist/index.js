/**
 * 配置
 */
const preset$2 = {
    prefix: ''
};

/**
 * 样式
 */
const preset$1 = {
    width: undefined,
    height: undefined,
    overflow: 'auto',
    color: '#333',
    padding: '1em',
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
    dom;
    /**
     * 元素
     */
    constructor(context, dom) {
        this.context = context;
        this.dom = dom;
    }
    /**
     * 删除
     */
    remove() {
        this.dom.remove();
    }
}

/**
 * 行
 */
const preset = {
    color: '',
    prefix: true,
    typing: false,
    typingPeriod: 30
};
/**
 * 打字
 * @param dom 元素
 * @param text 文本
 * @param period 单字周期
 */
function type(dom, text, period = preset.typingPeriod) {
    for (let i = 0; i < text.length + 1; i++) {
        setTimeout(() => {
            dom.innerText = text.slice(0, i);
        }, period * i);
    }
}
/**
 * 行
 */
class Line extends Element {
    config;
    /**
     * 构造方法
     * @param context 上下文
     * @param text 文本
     * @param config 配置
     */
    constructor(context, text, config = {}) {
        let dom = document.createElement('div');
        super(context, dom);
        this.config = Object.assign({}, preset, config);
        if (context.config.prefix && this.config?.prefix) {
            let prefix = document.createElement('span');
            prefix.innerText = context.config.prefix;
            dom.appendChild(prefix);
        }
        let span = document.createElement('span');
        if (this.config.typing) {
            type(span, text, this.config.typingPeriod);
        }
        else {
            span.innerText = text;
        }
        span.style.color = this.config.color || '';
        dom.style.boxSizing = 'border-box';
        dom.appendChild(span);
        this.dom = dom;
    }
}

/**
 * 空行
 */
/**
 * 类
 */
class Blank extends Element {
    /**
     * 构造方法
     * @param context 上下文
     */
    constructor(context) {
        let dom = document.createElement('br');
        super(context, dom);
        dom.innerText = ' ';
    }
}

/**
 * index
 */
/**
 * 网页Shell模拟器
 */
class WebShellSimulator {
    dom;
    config;
    /**
     * 构造方法
     * @param config 选项
     */
    constructor(config = {}, style = {}) {
        this.config = Object.assign({}, preset$2, config);
        let dom = document.createElement('div');
        dom.style.overflowX = 'hidden';
        dom.style.boxSizing = 'border-box';
        Object.assign(dom.style, Object.assign({}, preset$1, style));
        this.dom = dom;
    }
    get context() {
        return { dom: this.dom, config: this.config };
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
     * 添加空行
     */
    addBlank() {
        let blank = new Blank(this.context);
        this.dom.appendChild(blank.dom);
        this.scroll();
    }
    /**
     * 添加行
     * @param text 文本
     * @param config 配置
     */
    addLine(text, config) {
        let line = new Line(this.context, text, config);
        this.dom.appendChild(line.dom);
        this.scroll();
        return line;
    }
}

export { WebShellSimulator as default };
//# sourceMappingURL=index.js.map
