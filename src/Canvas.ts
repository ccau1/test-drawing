import { Commands } from ".";
import commands from "./commands";

class Canvas {
  protected _canvasGrid: string[][] = [];
  protected _commands = { ...commands };

  // Getters
  get canvasGrid() {
    return this._canvasGrid;
  }

  get width() {
    return this._canvasGrid.length;
  }

  get height() {
    return this._canvasGrid[0]?.length || 0;
  }

  get commands() {
    return this._commands;
  }

  // Setters

  constructor() {}

  /**
   * add external commands into the class to be used in takeAction
   * @param commands {Commands} - object of commands
   */
  addCommands(commands: Commands) {
    this._commands = { ...this._commands, ...commands };
  }

  /**
   * generate the canvas grid based on width and height
   * @param width {number} - number of elements across the x axis
   * @param height {number} - number of elements across the y axis
   */
  generateCanvasGrid(width: number, height: number) {
    this._canvasGrid = Array.from({ length: width }).map(() =>
      Array.from({ length: height }).map(() => " ")
    );
  }

  /**
   * destroy the grid, resetting it back to an empty array
   */
  destroyGrid() {
    this._canvasGrid = [];
  }

  /**
   * take an action based on the action type and arguments corresponding to it
   * @param type {string} - the action type to take, mapped to commands
   * @param args {string[]} - the arguments supplimenting the specific action
   */
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
