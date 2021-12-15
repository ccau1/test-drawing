"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    run: function (_a) {
        var canvas = _a.canvas, args = _a.args;
        if (args.length !== 2)
            throw new Error("argument length expected 2, received ".concat(args.length));
        var w = parseInt(args[0], 10), h = parseInt(args[1], 10);
        if (w === NaN || h === NaN)
            throw new Error("invalid numbers");
        canvas.generateCanvasGrid(w, h);
    },
    alias: ["create"],
};
