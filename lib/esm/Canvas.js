"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commands_1 = __importDefault(require("./commands"));
var Canvas = /** @class */ (function () {
    function Canvas() {
        this._canvasGrid = [];
        this._onCanvasGridUpdateFns = [];
    }
    Object.defineProperty(Canvas.prototype, "canvasGrid", {
        get: function () {
            return this._canvasGrid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "width", {
        get: function () {
            return this._canvasGrid.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "height", {
        get: function () {
            var _a;
            return ((_a = this._canvasGrid[0]) === null || _a === void 0 ? void 0 : _a.length) || 0;
        },
        enumerable: false,
        configurable: true
    });
    Canvas.prototype.addCanvasGridUpdateListener = function (fn) {
        this._onCanvasGridUpdateFns.push(fn);
    };
    Canvas.prototype.removeCanvasGridUpdateListener = function (fn) {
        this._onCanvasGridUpdateFns = this._onCanvasGridUpdateFns.filter(function (f) { return f !== fn; });
    };
    Canvas.prototype.generateCanvasGrid = function (width, height) {
        this._canvasGrid = Array.from({ length: width }).map(function () {
            return Array.from({ length: height }).map(function () { return " "; });
        });
    };
    Canvas.prototype.destroyGrid = function () {
        this._canvasGrid = [];
    };
    Canvas.prototype.takeAction = function (type, args) {
        var commandKey = Object.keys(commands_1.default).find(function (commandKey) {
            return commandKey === type.toLowerCase() ||
                (commands_1.default[commandKey].alias || []).includes(type.toLowerCase());
        });
        if (!commandKey)
            throw new Error("type not found");
        commands_1.default[commandKey].run({
            canvasGrid: this._canvasGrid,
            args: args,
            canvas: this,
        });
    };
    return Canvas;
}());
exports.default = Canvas;
