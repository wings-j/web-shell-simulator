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
    mulitNegative: string;
    padding: number;
}
declare type PartialConfig = Partial<Config>;
/**
 * 类
 */
declare class Select extends Element {
    private config;
    private $selections;
    private length;
    private singleIndex;
    active: boolean;
    /**
     * 构造方法
     * @param selections 选项
     */
    constructor(context: Context, selectons: string[], config?: PartialConfig);
    /**
     * 处理键盘弹起
     * @param ev 事件
     */
    handle_window_keyUp(ev: KeyboardEvent): void;
    /**
     * 选择
     */
    select(): void;
    /**
     * 销毁
     */
    destroy(): void;
}
export default Select;
export { PartialConfig as Config };
