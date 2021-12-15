import { CanvasGridUpdateFunction } from ".";
import commands from "./commands";

class Canvas {
  protected _canvasGrid: string[][] = [];
  protected _onCanvasGridUpdateFns: CanvasGridUpdateFunction[] = [];

  get canvasGrid() {
    return this._canvasGrid;
  }

  get width() {
    return this._canvasGrid.length;
  }

  get height() {
    return this._canvasGrid[0]?.length || 0;
  }

  constructor() {}

  addCanvasGridUpdateListener(fn: CanvasGridUpdateFunction) {
    this._onCanvasGridUpdateFns.push(fn);
  }

  removeCanvasGridUpdateListener(fn: CanvasGridUpdateFunction) {
    this._onCanvasGridUpdateFns = this._onCanvasGridUpdateFns.filter(
      (f) => f !== fn
    );
  }

  generateCanvasGrid(width: number, height: number) {
    this._canvasGrid = Array.from({ length: width }).map(() =>
      Array.from({ length: height }).map(() => " ")
    );
  }

  destroyGrid() {
    this._canvasGrid = [];
  }

  takeAction(type: string, args: string[]) {
    const commandKey = Object.keys(commands).find(
      (commandKey) =>
        commandKey === type.toLowerCase() ||
        (commands[commandKey].alias || []).includes(type.toLowerCase())
    );

    if (!commandKey) throw new Error("type not found");

    commands[commandKey].run({
      canvasGrid: this._canvasGrid,
      args,
      canvas: this,
    });
  }
}

export default Canvas;
