import { CanvasGridUpdateFunction } from ".";
declare class Canvas {
    protected _canvasGrid: string[][];
    protected _onCanvasGridUpdateFns: CanvasGridUpdateFunction[];
    get canvasGrid(): string[][];
    get width(): number;
    get height(): number;
    constructor();
    addCanvasGridUpdateListener(fn: CanvasGridUpdateFunction): void;
    removeCanvasGridUpdateListener(fn: CanvasGridUpdateFunction): void;
    generateCanvasGrid(width: number, height: number): void;
    destroyGrid(): void;
    takeAction(type: string, args: string[]): void;
}
export default Canvas;
