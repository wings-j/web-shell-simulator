(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.WebShellSimulator = factory());
}(this, (function () { 'use strict';

  /**
   * @name 配置
   */
  var preset$2 = {
    prefix: ''
  };

  /**
   * @name 样式
   */
  var preset$1 = {
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

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  /**
   * @name 元素
   */

  /* public */

  /**
   * @name 元素
   */
  var Element =
  /** @class */
  function () {
    /**
     * @name 元素
     */
    function Element(context, dom) {
      this.context = context;
      this.dom = dom;
    }
    /**
     * @name 删除
     */


    Element.prototype.remove = function () {
      this.dom.remove();
    };

    return Element;
  }();

  /**
   * @name 行
   */
  var preset = {
    color: '',
    prefix: true,
    typing: false,
    typingPeriod: 30
  };
  /**
   * @name 打字
   * @param dom 元素
   * @param text 文本
   * @param period 单字周期
   */

  function type(dom, text, period) {
    if (period === void 0) {
      period = preset.typingPeriod;
    }

    var _loop_1 = function _loop_1(i) {
      setTimeout(function () {
        dom.innerText = text.slice(0, i);
      }, period * i);
    };

    for (var i = 0; i < text.length + 1; i++) {
      _loop_1(i);
    }
  }
  /**
   * @name 行
   */


  var Line =
  /** @class */
  function (_super) {
    __extends(Line, _super);
    /**
     * @name 构造方法
     * @param context 上下文
     * @param text 文本
     * @param config 配置
     */


    function Line(context, text, config) {
      if (config === void 0) {
        config = {};
      }

      var _a;

      var _this = this;

      var dom = document.createElement('div');
      _this = _super.call(this, context, dom) || this;
      _this.config = Object.assign({}, preset, config);

      if (context.config.prefix && ((_a = _this.config) === null || _a === void 0 ? void 0 : _a.prefix)) {
        var prefix = document.createElement('span');
        prefix.innerText = context.config.prefix;
        dom.appendChild(prefix);
      }

      var span = document.createElement('span');

      if (_this.config.typing) {
        type(span, text, _this.config.typingPeriod);
      } else {
        span.innerText = text;
      }

      span.style.color = _this.config.color || '';
      dom.style.boxSizing = 'border-box';
      dom.appendChild(span);
      _this.dom = dom;
      return _this;
    }

    return Line;
  }(Element);

  /**
   * @name 空行
   */
  /* public */

  /**
   * @name 空行
   */

  var Blank =
  /** @class */
  function (_super) {
    __extends(Blank, _super);
    /**
     * @name 构造方法
     * @param context 上下文
     */


    function Blank(context) {
      var _this = this;

      var dom = document.createElement('br');
      _this = _super.call(this, context, dom) || this;
      dom.innerText = ' ';
      return _this;
    }

    return Blank;
  }(Element);

  /**
   * @name index
   */
  /* public */

  /**
   * @name 网页Shell模拟器
   */

  var WebShellSimulator =
  /** @class */
  function () {
    /**
     * @name 构造方法
     * @param config 选项
     */
    function WebShellSimulator(config, style) {
      if (config === void 0) {
        config = {};
      }

      if (style === void 0) {
        style = {};
      }

      this.config = Object.assign({}, preset$2, config);
      var dom = document.createElement('div');
      dom.style.overflowX = 'hidden';
      dom.style.boxSizing = 'border-box';
      Object.assign(dom.style, Object.assign({}, preset$1, style));
      this.dom = dom;
    }

    Object.defineProperty(WebShellSimulator.prototype, "context", {
      get: function get() {
        return {
          dom: this.dom,
          config: this.config
        };
      },
      enumerable: false,
      configurable: true
    });
    /**
     * @name 滚动至底部
     */

    WebShellSimulator.prototype.scroll = function () {
      var _this = this;

      setTimeout(function () {
        _this.dom.scrollTo({
          behavior: 'smooth',
          top: _this.dom.scrollHeight
        });
      });
    };
    /**
     * @name 添加空行
     */


    WebShellSimulator.prototype.addBlank = function () {
      var blank = new Blank(this.context);
      this.dom.appendChild(blank.dom);
      this.scroll();
    };
    /**
     * @name 添加行
     * @param text 文本
     * @param config 配置
     */


    WebShellSimulator.prototype.addLine = function (text, config) {
      var line = new Line(this.context, text, config);
      this.dom.appendChild(line.dom);
      this.scroll();
      return line;
    };

    return WebShellSimulator;
  }();

  return WebShellSimulator;

})));
