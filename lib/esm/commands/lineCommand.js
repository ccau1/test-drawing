"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.default = {
    run: function (_a) {
        var canvasGrid = _a.canvasGrid, args = _a.args;
        if (args.length !== 4)
            throw new Error("argument length expected 4, received ".concat(args.length));
        var _b = (0, utils_1.sortNumbers)([
            parseInt(args[0], 10) - 1,
            parseInt(args[2], 10) - 1,
        ]), x1 = _b[0], x2 = _b[1];
        var _c = (0, utils_1.sortNumbers)([
            parseInt(args[1], 10) - 1,
            parseInt(args[3], 10) - 1,
        ]), y1 = _c[0], y2 = _c[1];
        var isHorizontal = y1 === y2;
        if (isHorizontal) {
            // y1 === y2
            // go through each x array, and change element at index y
            var yIndex = (0, utils_1.boundNumber)(y1, { min: 0, max: canvasGrid[0].length - 1 });
            var min = (0, utils_1.boundNumber)(x1, { min: 0 });
            var max = (0, utils_1.boundNumber)(x2, { max: canvasGrid[yIndex].length - 1 });
            for (var i = min; i <= max; i++) {
                canvasGrid[i][yIndex] = "x";
            }
        }
        else {
            // x1 === x2
            // update all elements in x1 between y1 & y2 to 'x'
            var xIndex = Math.max(Math.min(x1, canvasGrid.length - 1), 0);
            var min = Math.max(y1, 0);
            var max = Math.min(y2, canvasGrid[y1].length - 1);
            for (var i = min; i <= max; i++) {
                canvasGrid[xIndex][i] = "x";
            }
        }
    },
    alias: ["line"],
};
