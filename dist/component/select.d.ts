/**
 * 单选
 */
import Context from '../core/context';
import Element from '../core/element';
interface Config {
    color: string;
    multi: boolean;
    singlePositive: string;
    singleNegative: string;
    multiPositive: string;
    multiNegative: string;
    padding: number;
    callback: (res: string | string[]) => void;
    removeOnEnter: boolean;
}
declare type PartialConfig = Partial<Config>;
/**
 * 类
 */
declare class Select extends Element {
    private config;
    private selections;
    private $selections;
    private length;
    private index;
    private indexes;
    /**
     * 构造方法
     * @param context 上下文
     * @param selections 选项
     * @param config 配置
     */
    constructor(context: Context, selections: string[], config?: PartialConfig);
    /**
     * 处理键盘弹起
     * @param ev 事件
     */
    private handle_keyUp;
    /**
     * 处理点击
     * @param selection 选项
     */
    private handle_click;
    /**
     * 渲染
     */
    private render;
    /**
     * 聚焦
     */
    focus(): void;
    /**
     * 失焦
     */
    blur(): void;
    /**
     * 回车
     */
    enter(): void;
    /**
     * 空格
     */
    space(): void;
    /**
     * 上
     */
    up(): void;
    /**
     * 下
     */
    down(): void;
}
export default Select;
export { PartialConfig as Config };
