"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    run: function (_a) {
        var canvas = _a.canvas, args = _a.args;
        // args must be length of 2
        if (args.length !== 2)
            throw new Error("argument length expected 2, received ".concat(args.length));
        // extract w and h from args
        var w = parseInt(args[0], 10), h = parseInt(args[1], 10);
        // if either one of them is NaN, throw error
        if (w === NaN || h === NaN)
            throw new Error("invalid numbers");
        // generate grid from w and h
        canvas.generateCanvasGrid(w, h);
    },
    alias: ["create"],
};
