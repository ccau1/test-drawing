import { Command } from "..";
import { fillSurrounding } from "../utils";

export default {
  run: ({ canvasGrid, args }) => {
    // arguments must have length of 3
    if (args.length !== 3)
      throw new Error(`argument length expected 3, received ${args.length}`);

    // extract x, y and c from args
    const x = parseInt(args[0], 10) - 1,
      y = parseInt(args[1], 10) - 1,
      c = args[2];

    // fill surrounding (including self) based on matched fill with c
    fillSurrounding(x, y, canvasGrid[x][y], c.charAt(0), canvasGrid);
  },
  alias: ["fill"],
} as Command;
