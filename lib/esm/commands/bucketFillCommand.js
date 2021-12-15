"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    run: function (_a) {
        var args = _a.args;
        if (args.length !== 3)
            throw new Error("argument length expected 3, received ".concat(args.length));
        // const x = args[0],
        //   y = args[1],
        //   c = args[2];
    },
    alias: ["fill"],
};
