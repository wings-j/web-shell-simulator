/**
 * @name 样式
 */
/**
 * @name 样式
 */
interface Style {
    [index: string]: number | string | 'auto' | 'hidden' | undefined;
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
declare const preset: Style;
export default Style;
export { preset };
