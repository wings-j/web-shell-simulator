declare module "type/config" {
    /**
     * @name 配置
     */
    /**
     * @name 配置
     */
    interface Config {
        width?: number;
        height?: number;
        overflow?: 'auto' | 'hidden';
        color?: string;
        padding?: string;
        background?: string;
        fontSize?: string;
        fontFamily?: string;
        lineHeight?: number | string;
    }
    const preset: Config;
    export default Config;
    export { preset };
}
declare module "index" { }
