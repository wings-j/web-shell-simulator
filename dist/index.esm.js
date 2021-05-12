function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 * @name 配置
 */

/* private */

/**
 * @name CSS样式属性
 */

/* public */

/**
 * @name 配置
 */
var preset = {
  style: {
    width: undefined,
    height: undefined,
    overflow: 'auto',
    color: '#333',
    padding: '1em',
    background: 'white',
    fontSize: '14px',
    fontFamily: '"Courier New", Courier, monospace',
    lineHeight: 1.5
  },
  animate: false
};

/**
 * @name 合并选项
 */

/* private */

/* public */

/**
 * @name 合并选项
 * @param configs 选项
 * @return 合并后的选项
 */
function mergeConfig() {
  for (var _len = arguments.length, configs = new Array(_len), _key = 0; _key < _len; _key++) {
    configs[_key] = arguments[_key];
  }

  var styles = configs.map(function (a) {
    return a.style;
  }).filter(function (a) {
    return a && _typeof(a) === 'object';
  });
  var style = Object.assign.apply(Object, [{}].concat(_toConsumableArray(styles)));
  var config = Object.assign.apply(Object, [{}].concat(configs));
  config.style = style;
  return config;
}

/* public */

/**
 * @name 网页Shell模拟器
 */

var WebShellSimulator =
/**
 * @name 构造方法
 * @param config 选项
 */
function WebShellSimulator() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, WebShellSimulator);

  var setting = mergeConfig(preset, config);
  var dom = document.createElement('div');
  dom.style.overflowX = 'hidden';
  dom.style.boxSizing = 'border-box';
  Object.assign(dom.style, setting.style);
  this.dom = dom;
};

export default WebShellSimulator;
