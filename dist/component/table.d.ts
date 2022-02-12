/**
 * 表格
 */
import Context from '../core/context';
import Element from '../type/element';
interface Config {
    color: string;
    padding: number;
}
declare type PartialConfig = Partial<Config>;
/**
 * 类
 */
declare class Table extends Element {
    name: string;
    private config;
    /**
     * 构造方法
     * @param context 上下文
     * @param data 数据
     */
    constructor(context: Context, data: (string | number)[][], config?: PartialConfig);
}
export default Table;
export { PartialConfig as Config };
