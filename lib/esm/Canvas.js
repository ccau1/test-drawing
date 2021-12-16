"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commands_1 = __importDefault(require("./commands"));
var Canvas = /** @class */ (function () {
    // Setters
    function Canvas() {
        this._canvasGrid = [];
        this._commands = __assign({}, commands_1.default);
    }
    Object.defineProperty(Canvas.prototype, "canvasGrid", {
        // Getters
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
    Object.defineProperty(Canvas.prototype, "commands", {
        get: function () {
            return this._commands;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * add external commands into the class to be used in takeAction
     * @param commands {Commands} - object of commands
     */
    Canvas.prototype.addCommands = function (commands) {
        this._commands = __assign(__assign({}, this._commands), commands);
    };
    /**
     * generate the canvas grid based on width and height
     * @param width {number} - number of elements across the x axis
     * @param height {number} - number of elements across the y axis
     */
    Canvas.prototype.generateCanvasGrid = function (width, height) {
        this._canvasGrid = Array.from({ length: width }).map(function () {
            return Array.from({ length: height }).map(function () { return " "; });
        });
    };
    /**
     * destroy the grid, resetting it back to an empty array
     */
    Canvas.prototype.destroyGrid = function () {
        this._canvasGrid = [];
    };
    /**
     * take an action based on the action type and arguments corresponding to it
     * @param type {string} - the action type to take, mapped to commands
     * @param args {string[]} - the arguments supplimenting the specific action
     */
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
