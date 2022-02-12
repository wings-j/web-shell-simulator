/**
 * 行
 */
import Context from '../core/context';
import Element from '../type/element';
declare const preset: {
    color: string;
    typing: boolean;
    typingPeriod: number;
    typingCallback: () => void;
    html: boolean;
};
declare type Config = typeof preset;
declare type PartialConfig = Partial<Config>;
/**
 * 行
 */
declare class Line extends Element {
    name: string;
    private config;
    private $text;
    /**
     * 构造方法
     * @param context 上下文
     * @param text 文本
     * @param config 配置
     */
    constructor(context: Context, text: string, config?: PartialConfig);
    /**
     * 更新
     * @param text 文本
     */
    update(text: string): void;
}
export default Line;
export { PartialConfig as Config };
