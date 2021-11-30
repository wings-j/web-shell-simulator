(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.WebShellSimulator = factory());
})(this, (function () { 'use strict';

  /**
   * 配置
   */
  const preset$1 = {};

  /**
   * 样式
   */
  const preset = {
      overflow: 'hidden',
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
      /**
       * 构造方法
       * @param context 上下文
       */
      constructor(context) {
          this.context = context;
      }
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
          let i = this.context.elements.indexOf(this);
          if (i > -1) {
              this.context.elements.splice(i, 1);
          }
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
          super(context);
          let br = document.createElement('br');
          this.dom.appendChild(br);
      }
  }

  /**
   * 行
   */
  const configPreset$1 = {
      color: '',
      typing: false,
      typingPeriod: 30
  };
  /**
   * 打字
   * @param dom 元素
   * @param text 文本
   * @param period 单字周期
   */
  function type(dom, text, period = configPreset$1.typingPeriod) {
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
      constructor(context, text, config) {
          super(context);
          this.config = Object.assign({}, configPreset$1, config);
          let span = document.createElement('span');
          if (this.config.typing) {
              type(span, text, this.config.typingPeriod);
          }
          else {
              span.innerText = text;
          }
          span.style.color = this.config.color || '';
          this.dom.appendChild(span);
      }
  }

  /**
   * 输入
   */
  const configPreset = {
      prefix: '',
      color: 'inherit'
  };
  const style = {
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
      fontFamily: 'inherit',
      lineHeight: 'inherit',
      wordSpacing: 'inherit',
      letterSpacing: 'inherit'
  };
  /**
   * 类
   */
  class Input extends Element {
      config;
      input;
      /**
       * 构造方法
       * @param context 上下文
       */
      constructor(context, config) {
          super(context);
          this.config = Object.assign({}, configPreset, config);
          let span = document.createElement('span');
          span.innerText = this.config.prefix;
          Object.assign(span.style, spanStyle, { color: this.config.color });
          let input = document.createElement('input');
          Object.assign(input.style, inputStyle);
          this.input = input;
          Object.assign(this.dom.style, style);
          this.dom.appendChild(span);
          this.dom.appendChild(input);
      }
      /**
       * 挂载
       */
      mount() {
          super.mount();
          setTimeout(() => {
              this.input.focus();
          });
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
      elements = [];
      /**
       * 构造方法
       * @param config 选项
       */
      constructor(config = {}, style = {}) {
          Object.assign(this.dom.style, Object.assign({}, preset, style));
          this.context = { config: Object.assign({}, preset$1, config), dom: this.dom, elements: this.elements };
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
       * 添加空行
       * @return 元素
       */
      addBlank() {
          let blank = new Blank(this.context);
          blank.mount();
          this.scroll();
          return blank;
      }
      /**
       * 添加行
       * @param text 文本
       * @param config 配置
       * @return 元素
       */
      addLine(text, config) {
          let line = new Line(this.context, text, config);
          line.mount();
          this.scroll();
          return line;
      }
      /**
       * 添加输入
       */
      addInput(config) {
          let input = new Input(this.context, config);
          input.mount();
          this.scroll();
          return input;
      }
  }

  return WebShellSimulator;

}));
//# sourceMappingURL=index.umd.js.map
