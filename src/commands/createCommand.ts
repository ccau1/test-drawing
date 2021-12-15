import { Command } from "..";

export default {
  run: ({ canvas, args }) => {
    if (args.length !== 2)
      throw new Error(`argument length expected 2, received ${args.length}`);

    const w = parseInt(args[0], 10),
      h = parseInt(args[1], 10);

    if (w === NaN || h === NaN) throw new Error("invalid numbers");

    canvas.generateCanvasGrid(w, h);
  },
  alias: ["create"],
} as Command;
