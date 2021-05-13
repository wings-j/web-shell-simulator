function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/**
 * @name 配置
 */

/* public */

/**
 * @name 配置
 */
var preset$2 = {
  prefix: ''
};

/**
 * @name 样式
 */

/* public */

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

/**
 * @name 元素
 */

/* private */

/* public */

/**
 * @name 元素
 */
var Element = /*#__PURE__*/function () {
  /**
   * @name 元素
   */
  function Element(context, dom) {
    _classCallCheck(this, Element);

    this.context = context;
    this.dom = dom;
  }
  /**
   * @name 删除
   */


  _createClass(Element, [{
    key: "remove",
    value: function remove() {
      this.dom.remove();
    }
  }]);

  return Element;
}();

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

function type(dom, text) {
  var period = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : preset.typingPeriod;

  var _loop = function _loop(i) {
    setTimeout(function () {
      dom.innerText = text.slice(0, i);
    }, period * i);
  };

  for (var i = 0; i < text.length + 1; i++) {
    _loop(i);
  }
}
/* public */

/**
 * @name 配置
 */


/**
 * @name 行
 */
var Line = /*#__PURE__*/function (_Element) {
  _inherits(Line, _Element);

  var _super = _createSuper(Line);

  /* private */

  /**
   * @name 构造方法
   * @param context 上下文
   * @param text 文本
   * @param config 配置
   */
  function Line(context, text) {
    var _this$config;

    var _this;

    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Line);

    var dom = document.createElement('div');
    _this = _super.call(this, context, dom);
    _this.config = Object.assign({}, preset, config);

    if (context.config.prefix && (_this$config = _this.config) !== null && _this$config !== void 0 && _this$config.prefix) {
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

/* public */

/**
 * @name 空行
 */
var Blank = /*#__PURE__*/function (_Element) {
  _inherits(Blank, _Element);

  var _super = _createSuper(Blank);

  /**
   * @name 构造方法
   * @param context 上下文
   */
  function Blank(context) {
    var _this;

    _classCallCheck(this, Blank);

    var dom = document.createElement('br');
    _this = _super.call(this, context, dom);
    dom.innerText = ' ';
    return _this;
  }

  return Blank;
}(Element);

/* public */

/**
 * @name 网页Shell模拟器
 */

var WebShellSimulator = /*#__PURE__*/function () {
  /**
   * @name 构造方法
   * @param config 选项
   */
  function WebShellSimulator() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, WebShellSimulator);

    this.config = Object.assign({}, preset$2, config);
    var dom = document.createElement('div');
    dom.style.overflowX = 'hidden';
    dom.style.boxSizing = 'border-box';
    Object.assign(dom.style, Object.assign({}, preset$1, style));
    this.dom = dom;
  }

  _createClass(WebShellSimulator, [{
    key: "context",
    get: function get() {
      return {
        dom: this.dom,
        config: this.config
      };
    }
    /**
     * @name 滚动至底部
     */

  }, {
    key: "scroll",
    value: function scroll() {
      var _this = this;

      setTimeout(function () {
        _this.dom.scrollTo({
          behavior: 'smooth',
          top: _this.dom.scrollHeight
        });
      });
    }
    /**
     * @name 添加空行
     */

  }, {
    key: "addBlank",
    value: function addBlank() {
      var blank = new Blank(this.context);
      this.dom.appendChild(blank.dom);
      this.scroll();
    }
    /**
     * @name 添加行
     * @param text 文本
     * @param config 配置
     */

  }, {
    key: "addLine",
    value: function addLine(text, config) {
      var line = new Line(this.context, text, config);
      this.dom.appendChild(line.dom);
      this.scroll();
      return line;
    }
  }]);

  return WebShellSimulator;
}();

export default WebShellSimulator;
