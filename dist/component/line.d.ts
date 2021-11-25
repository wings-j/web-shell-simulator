/**
 * 行
 */
import Context from '../core/context';
import Element from '../core/element';
/**
 * 配置
 */
interface LineConfig {
    color?: string;
    prefix?: boolean;
    typing?: boolean;
    typingPeriod?: number;
}
/**
 * 行
 */
declare class Line extends Element {
    config: LineConfig;
    /**
     * 构造方法
     * @param context 上下文
     * @param text 文本
     * @param config 配置
     */
    constructor(context: Context, text: string, config?: LineConfig);
}
export default Line;
export { LineConfig };
