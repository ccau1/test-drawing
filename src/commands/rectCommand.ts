import { Command } from "..";
import lineCommand from "./lineCommand";

export default {
  run: ({ canvas, canvasGrid, args }) => {
    if (args.length !== 4)
      throw new Error(`argument length expected 4, received ${args.length}`);

    const x1 = args[0],
      y1 = args[1],
      x2 = args[2],
      y2 = args[3];

    // top left -> top right
    lineCommand.run({ canvas, canvasGrid, args: [x1, y1, x2, y1] });
    // top right -> bottom right
    lineCommand.run({ canvas, canvasGrid, args: [x2, y1, x2, y2] });
    // bottom right -> bottom left
    lineCommand.run({ canvas, canvasGrid, args: [x2, y2, x1, y2] });
    // bottom left -> top left
    lineCommand.run({ canvas, canvasGrid, args: [x1, y2, x1, y1] });
  },
  alias: ["rect"],
} as Command;
