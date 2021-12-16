"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.default = {
    run: function (_a) {
        var canvasGrid = _a.canvasGrid, args = _a.args;
        // args must be length of 4
        if (args.length !== 4)
            throw new Error("argument length expected 4, received ".concat(args.length));
        // args must all be greater or equal to 1
        if (parseInt(args[0], 10) < 1 ||
            parseInt(args[1], 10) < 1 ||
            parseInt(args[2], 10) < 1 ||
            parseInt(args[3], 10) < 1) {
            throw new Error("all args must be value 1 or higher");
        }
        // extract coordinates from args and sort them
        var _b = [
            parseInt(args[0], 10) - 1,
            parseInt(args[2], 10) - 1,
        ].sort(function (a, b) { return a - b; }), x1 = _b[0], x2 = _b[1];
        var _c = [
            parseInt(args[1], 10) - 1,
            parseInt(args[3], 10) - 1,
        ].sort(function (a, b) { return a - b; }), y1 = _c[0], y2 = _c[1];
        // get whether it is horizontal
        var isHorizontal = y1 === y2;
        if (isHorizontal) {
            // y1 === y2
            // go through each x array, and change element at index y
            // get the y index to change on each x column
            var yIndex = (0, utils_1.boundNumber)(y1, { min: 0, max: canvasGrid[0].length - 1 });
            // get the min/max of x columns to go through
            var min = (0, utils_1.boundNumber)(x1, { min: 0 });
            var max = (0, utils_1.boundNumber)(x2, { max: canvasGrid.length - 1 });
            console.log("yIndex", yIndex, min, max, canvasGrid[yIndex].length - 1, { x: x1, y: y1 }, { x: x2, y: y2 });
            // loop through each used x columns, and change
            // value at y index on each column
            for (var i = min; i <= max; i++) {
                canvasGrid[i][yIndex] = "x";
            }
        }
        else {
            // x1 === x2
            // update all elements in x1 between y1 & y2 to 'x'
            // get the x column to update on
            var xIndex = Math.max(Math.min(x1, canvasGrid.length - 1), 0);
            // get the min/max of y rows
            var min = Math.max(y1, 0);
            var max = Math.min(y2, canvasGrid[y1].length - 1);
            // go through each y row in specified x column,
            // and set value at each position
            for (var i = min; i <= max; i++) {
                canvasGrid[xIndex][i] = "x";
            }
        }
    },
    alias: ["line"],
};
