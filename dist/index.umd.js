(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.WebShellSimulator = factory());
})(this, (function () { 'use strict';

  /**
   * 配置
   */
  const preset$4 = {};

  /**
   * 样式
   */
  const preset$3 = {
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
       * 销毁
       * @description 重载
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
  const preset$2 = {
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
  function type(dom, text, period = preset$2.typingPeriod) {
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
          this.config = Object.assign({}, preset$2, config);
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
  const preset$1 = {
      color: 'inherit',
      prefix: '>',
      padding: 10,
      value: '',
      fixOnBlur: true,
      callback: () => { }
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
      config;
      input;
      active = true;
      /**
       * 构造方法
       * @param context 上下文
       */
      constructor(context, config) {
          super(context);
          this.config = Object.assign({}, preset$1, config);
          let span = document.createElement('span');
          span.innerText = this.config.prefix;
          Object.assign(span.style, spanStyle, { color: this.config.color });
          let input = document.createElement('input');
          Object.assign(input.style, inputStyle, { marginLeft: this.config.padding + 'px' });
          input.value = this.config.value;
          input.onfocus = () => {
              this.active = true;
          };
          input.onblur = () => {
              if (this.config.fixOnBlur) {
                  input.disabled = true;
              }
              this.active = false;
          };
          input.onkeyup = ev => {
              if (ev.code === 'Enter') {
                  input.blur();
                  this.config.callback(input.value);
              }
          };
          this.input = input;
          Object.assign(this.dom.style, style$1);
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
   * 单选
   */
  const preset = {
      color: 'inherit',
      multi: false,
      singlePositive: '* ',
      singleNegative: '  ',
      multiPositive: '[*] ',
      mulitNegative: '[ ] ',
      padding: 20
  };
  const style = {
      whiteSpace: 'pre'
  };
  const class_pointer = 'web-shell-simulator_pointer';
  /**
   * 类
   */
  class Select extends Element {
      config;
      $selections = [];
      length = 0;
      index = 0;
      active = true;
      /**
       * 构造方法
       * @param selections 选项
       */
      constructor(context, selectons, config) {
          super(context);
          this.config = Object.assign({}, preset, config);
          Object.assign(this.dom.style, style, { color: this.config.color, paddingLeft: this.config.padding + 'px' });
          this.length = selectons.length;
          for (let a of selectons) {
              let div = document.createElement('div');
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
          this.select();
          this.handle_window_keyUp = this.handle_window_keyUp.bind(this);
          window.addEventListener('keyup', this.handle_window_keyUp);
      }
      /**
       * 处理键盘弹起
       * @param ev 事件
       */
      handle_window_keyUp(ev) {
          if (this.active) {
              if (this.config.multi) {
                  if (ev.code === 'ArrowUp') ;
                  else if (ev.code === 'ArrowDown') ;
                  else if (this.config.multi && ev.code === 'Space') ;
              }
              else {
                  if (ev.code === 'ArrowUp') {
                      this.index = Math.max(this.index - 1, 0);
                      this.select();
                  }
                  else if (ev.code === 'ArrowDown') {
                      this.index = Math.min(this.index + 1, this.length - 1);
                      this.select();
                  }
              }
          }
          if (ev.code === 'Enter') ;
      }
      /**
       * 销毁
       */
      destroy() {
          window.removeEventListener('keyup', this.handle_window_keyUp);
      }
      /**
       * 选择
       * @param index 目标索引
       */
      select(index) {
          index = index ?? this.index;
          if (this.config.multi) ;
          else {
              for (let i = 0; i < this.length; i++) {
                  let target = this.$selections[i].querySelector('.' + class_pointer);
                  if (target) {
                      if (i === this.index) {
                          target.innerText = this.config.singlePositive;
                      }
                      else {
                          target.innerText = this.config.singleNegative;
                      }
                  }
              }
          }
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
          Object.assign(this.dom.style, Object.assign({}, preset$3, style));
          this.context = { config: Object.assign({}, preset$4, config), dom: this.dom, elements: this.elements };
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
       * @param config 配置
       * @return 元素
       */
      addInput(config) {
          let input = new Input(this.context, config);
          input.mount();
          this.scroll();
          return input;
      }
      /**
       * 添加选择
       * @param selections 选项
       * @param config 配置
       * @return 元素
       */
      addSelect(selections, config) {
          let select = new Select(this.context, selections, config);
          select.mount();
          this.scroll();
          return select;
      }
  }

  return WebShellSimulator;

}));
//# sourceMappingURL=index.umd.js.map
