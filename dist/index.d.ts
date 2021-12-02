/**
 * index
 */
import Config from './core/config';
import Style from './core/style';
import Element from './core/element';
import Blank from './component/blank';
import Line, { Config as LineConfig } from './component/line';
import { Config as InputConfig } from './component/input';
import { Config as SelectConfig } from './component/select';
/**
 * 网页Shell模拟器
 */
declare class WebShellSimulator {
    private context;
    dom: HTMLElement;
    elements: Element[];
    /**
     * 构造方法
     * @param config 选项
     */
    constructor(config?: Config, style?: Style);
    /**
     * 滚动至底部
     */
    private scroll;
    /**
     * 挂载
     * @param selector 选择器
     */
    mount(selector: string): void;
    /**
     * 添加空行
     * @return 元素
     */
    addBlank(): {
        blank: Blank;
    };
    /**
     * 添加行
     * @param text 文本
     * @param config 配置
     * @return 元素
     */
    addLine(text: string, config?: LineConfig): {
        line: Line;
    };
    /**
     * 添加输入
     * @param config 配置
     * @return 元素
     */
    addInput(config?: InputConfig): {
        input: undefined;
        promise: Promise<string>;
    };
    /**
     * 添加选择
     * @param selections 选项
     * @param config 配置
     * @return 元素
     */
    addSelect(selections: string[], config?: SelectConfig): {
        select: undefined;
        promise: Promise<string | string[]>;
    };
}
export default WebShellSimulator;
