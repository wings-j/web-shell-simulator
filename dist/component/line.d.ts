/**
 * 行
 */
import Context from '../core/context';
import Element from '../core/element';
/**
 * 配置
 */
interface Config {
    color: string;
    typing: boolean;
    typingPeriod: number;
}
/**
 * 行
 */
declare class Line extends Element {
    private config;
    /**
     * 构造方法
     * @param context 上下文
     * @param text 文本
     * @param config 配置
     */
    constructor(context: Context, text: string, config?: Partial<Config>);
}
export default Line;
export { Config };
