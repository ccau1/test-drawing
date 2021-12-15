"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bucketFillCommand_1 = __importDefault(require("./bucketFillCommand"));
var createCommand_1 = __importDefault(require("./createCommand"));
var lineCommand_1 = __importDefault(require("./lineCommand"));
var quitCommand_1 = __importDefault(require("./quitCommand"));
var rectCommand_1 = __importDefault(require("./rectCommand"));
var commands = {
    b: bucketFillCommand_1.default,
    c: createCommand_1.default,
    l: lineCommand_1.default,
    q: quitCommand_1.default,
    r: rectCommand_1.default,
};
exports.default = commands;
