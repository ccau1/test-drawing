"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillSurrounding = exports.getSurroundingCells = exports.boundNumber = void 0;
/**
 * bound a number with a upper and lower bound
 * @param number {number} - the number to set boundary to
 * @param boundary {{max?: number; min?: number;}} - max and min to bound the number to
 * @returns {number} - final number after bounding it
 */
var boundNumber = function (number, boundary) {
    var result = number;
    if (boundary.max !== undefined)
        result = Math.min(result, boundary.max);
    if (boundary.min !== undefined)
        result = Math.max(result, boundary.min);
    return result;
};
exports.boundNumber = boundNumber;
/**
 * get the surrounding cells based on current XY and canvasGrid as boundary
 * @param x {number} - x coordinate of current cell
 * @param y {number} - y coordinate of current cell
 * @param canvasGrid {CanvasGrid} - current grid string[][]
 * @returns {Array<{x: number; y: number}>} array of XYs
 */
var getSurroundingCells = function (x, y, canvasGrid) {
    var surroundingCells = [];
    var pos;
    for (var xx = -1; xx <= 1; xx++) {
        for (var yy = -1; yy <= 1; yy++) {
            // if it is 0,0, it is the current position, so skip it
            if (xx === 0 && yy === 0)
                continue;
            pos = { x: x + xx, y: y + yy };
            // if one is less than 0 or greater than what canvasGrid can hold,
            // skip it
            if (pos.x < 0 ||
                pos.x > canvasGrid.length - 1 ||
                pos.y < 0 ||
                pos.y > (canvasGrid[0] || []).length - 1) {
                continue;
            }
            // store XY
            surroundingCells.push(pos);
        }
    }
    return surroundingCells;
};
exports.getSurroundingCells = getSurroundingCells;
/**
 * fill all surrounding (including self) that has the matchFill with setFill
 * @param x {number} - x coordinate of current cell
 * @param y {number} - y coordinate of current cell
 * @param matchFill {string} - the fill color to match
 * @param setFill {string} - the fill color to set for matched cells
 * @param canvasGrid {CanvasGrid} - the current grid string[][]
 * @param filledCells {{[xy: string]: boolean}} - tracking already handled XYs
 */
var fillSurrounding = function (x, y, matchFill, setFill, canvasGrid, filledCells) {
    if (filledCells === void 0) { filledCells = {}; }
    if (x < 0 || y < 0)
        return;
    canvasGrid[x][y] = setFill;
    filledCells[x + "_" + y] = true;
    var surroundingCells = (0, exports.getSurroundingCells)(x, y, canvasGrid);
    surroundingCells.forEach(function (cell) {
        if (canvasGrid[cell.x][cell.y] === matchFill &&
            !filledCells[cell.x + "_" + cell.y]) {
            filledCells[cell.x + "_" + cell.y] = true;
            canvasGrid[cell.x][cell.y] = setFill;
            (0, exports.fillSurrounding)(cell.x, cell.y, matchFill, setFill, canvasGrid, filledCells);
        }
    });
};
exports.fillSurrounding = fillSurrounding;
