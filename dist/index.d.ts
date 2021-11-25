/**
 * @name index
 */
import Config from './core/config';
import Style from './core/style';
import Line, { LineConfig } from './component/line';
/**
 * @name 网页Shell模拟器
 */
declare class WebShellSimulator {
    dom: HTMLElement;
    config: Config;
    /**
     * @name 构造方法
     * @param config 选项
     */
    constructor(config?: Config, style?: Style);
    private get context();
    /**
     * @name 滚动至底部
     */
    private scroll;
    /**
     * @name 添加空行
     */
    addBlank(): void;
    /**
     * @name 添加行
     * @param text 文本
     * @param config 配置
     */
    addLine(text: string, config?: LineConfig): Line;
}
export default WebShellSimulator;