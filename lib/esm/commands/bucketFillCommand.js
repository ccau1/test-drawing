"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.default = {
    run: function (_a) {
        var canvasGrid = _a.canvasGrid, args = _a.args;
        // arguments must have length of 3
        if (args.length !== 3)
            throw new Error("argument length expected 3, received ".concat(args.length));
        // extract x, y and c from args
        var x = parseInt(args[0], 10) - 1, y = parseInt(args[1], 10) - 1, c = args[2];
        // fill surrounding (including self) based on matched fill with c
        (0, utils_1.fillSurrounding)(x, y, canvasGrid[x][y], c.charAt(0), canvasGrid);
    },
    alias: ["fill"],
};
