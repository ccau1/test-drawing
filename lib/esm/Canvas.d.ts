import { Commands } from ".";
declare class Canvas {
    protected _canvasGrid: string[][];
    protected _commands: {
        [x: string]: import(".").Command;
    };
    get canvasGrid(): string[][];
    get width(): number;
    get height(): number;
    get commands(): {
        [x: string]: import(".").Command;
    };
    constructor();
    /**
     * add external commands into the class to be used in takeAction
     * @param commands {Commands} - object of commands
     */
    addCommands(commands: Commands): void;
    /**
     * generate the canvas grid based on width and height
     * @param width {number} - number of elements across the x axis
     * @param height {number} - number of elements across the y axis
     */
    generateCanvasGrid(width: number, height: number): void;
    /**
     * destroy the grid, resetting it back to an empty array
     */
    destroyGrid(): void;
    /**
     * take an action based on the action type and arguments corresponding to it
     * @param type {string} - the action type to take, mapped to commands
     * @param args {string[]} - the arguments supplimenting the specific action
     */
    takeAction(type: string, args: string[]): void;
}
export default Canvas;
