/**
 * @name 配置
 */
define("type/config", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.preset = void 0;
    var preset = {
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
    exports.preset = preset;
});
/**
 * @name index
 */
define("index", ["require", "exports", "type/config"], function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* public */
    /**
     * @name 网页Shell模拟器
     */
    var WebShellSimulator = /** @class */ (function () {
        /**
         * @name 构造方法
         */
        function WebShellSimulator(config) {
            if (config === void 0) { config = {}; }
            config = Object.assign({}, config_1.preset, config);
            var dom = document.createElement('div');
            dom.style.overflowX = 'hidden';
            this.dom = dom;
        }
        return WebShellSimulator;
    }());
});
