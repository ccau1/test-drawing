import { Command } from "..";

export default {
  run: ({ canvas, args }) => {
    // args must be length of 2
    if (args.length !== 2)
      throw new Error(`argument length expected 2, received ${args.length}`);

    // extract w and h from args
    const w = parseInt(args[0], 10),
      h = parseInt(args[1], 10);

    // if either one of them is NaN, throw error
    if (w === NaN || h === NaN) throw new Error("invalid numbers");

    // generate grid from w and h
    canvas.generateCanvasGrid(w, h);
  },
  alias: ["create"],
} as Command;
