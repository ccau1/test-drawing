"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lineCommand_1 = __importDefault(require("./lineCommand"));
exports.default = {
    run: function (_a) {
        var canvas = _a.canvas, canvasGrid = _a.canvasGrid, args = _a.args;
        if (args.length !== 4)
            throw new Error("argument length expected 4, received ".concat(args.length));
        var x1 = args[0], y1 = args[1], x2 = args[2], y2 = args[3];
        // top left -> top right
        lineCommand_1.default.run({ canvas: canvas, canvasGrid: canvasGrid, args: [x1, y1, x2, y1] });
        // top right -> bottom right
        lineCommand_1.default.run({ canvas: canvas, canvasGrid: canvasGrid, args: [x2, y1, x2, y2] });
        // bottom right -> bottom left
        lineCommand_1.default.run({ canvas: canvas, canvasGrid: canvasGrid, args: [x2, y2, x1, y2] });
        // bottom left -> top left
        lineCommand_1.default.run({ canvas: canvas, canvasGrid: canvasGrid, args: [x1, y2, x1, y1] });
    },
    alias: ["rect"],
};
