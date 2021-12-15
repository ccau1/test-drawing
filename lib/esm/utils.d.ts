import { CanvasGrid } from ".";
/**
 * bound a number with a upper and lower bound
 * @param number {number} - the number to set boundary to
 * @param boundary {{max?: number; min?: number;}} - max and min to bound the number to
 * @returns {number} - final number after bounding it
 */
export declare const boundNumber: (number: number, boundary: {
    max?: number;
    min?: number;
}) => number;
/**
 * get the surrounding cells based on current XY and canvasGrid as boundary
 * @param x {number} - x coordinate of current cell
 * @param y {number} - y coordinate of current cell
 * @param canvasGrid {CanvasGrid} - current grid string[][]
 * @returns {Array<{x: number; y: number}>} array of XYs
 */
export declare const getSurroundingCells: (x: number, y: number, canvasGrid: CanvasGrid) => {
    x: number;
    y: number;
}[];
/**
 * fill all surrounding (including self) that has the matchFill with setFill
 * @param x {number} - x coordinate of current cell
 * @param y {number} - y coordinate of current cell
 * @param matchFill {string} - the fill color to match
 * @param setFill {string} - the fill color to set for matched cells
 * @param canvasGrid {CanvasGrid} - the current grid string[][]
 * @param filledCells {{[xy: string]: boolean}} - tracking already handled XYs
 */
export declare const fillSurrounding: (x: number, y: number, matchFill: string, setFill: string, canvasGrid: CanvasGrid, filledCells?: {
    [xy: string]: boolean;
}) => void;
