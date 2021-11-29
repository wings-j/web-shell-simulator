/**
 * index
 */
import Config from './core/config';
import Style from './core/style';
import Line, { LineConfig } from './component/line';
import Blank from './component/blank';
import Element from './core/element';
/**
 * 网页Shell模拟器
 */
declare class WebShellSimulator {
    private config;
    dom: HTMLElement;
    elements: Element[];
    /**
     * 构造方法
     * @param config 选项
     */
    constructor(config?: Config, style?: Style);
    private get context();
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
    addBlank(): Blank;
    /**
     * 添加行
     * @param text 文本
     * @param config 配置
     * @return 元素
     */
    addLine(text: string, config?: LineConfig): Line;
}
export default WebShellSimulator;
