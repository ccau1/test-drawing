import Canvas from "./Canvas";
export { default } from "./Canvas";
export declare type CanvasGrid = string[][];
export declare type CanvasGridUpdateFunction = (canvasGrid: string[][]) => void;
export interface CommandFunction {
    (options: {
        canvasGrid: CanvasGrid;
        args: string[];
        canvas: Canvas;
    }): void;
}
export interface Command {
    run: CommandFunction;
    alias?: string[];
}
export interface Commands {
    [drawType: string]: Command;
}
