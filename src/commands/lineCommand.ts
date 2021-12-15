import { Command } from "..";
import { boundNumber } from "../utils";

export default {
  run: ({ canvasGrid, args }) => {
    if (args.length !== 4)
      throw new Error(`argument length expected 4, received ${args.length}`);

    const [x1, x2] = [
      parseInt(args[0], 10) - 1,
      parseInt(args[2], 10) - 1,
    ].sort((a, b) => a - b);
    const [y1, y2] = [
      parseInt(args[1], 10) - 1,
      parseInt(args[3], 10) - 1,
    ].sort((a, b) => a - b);

    const isHorizontal = y1 === y2;

    if (isHorizontal) {
      // y1 === y2
      // go through each x array, and change element at index y
      const yIndex = boundNumber(y1, { min: 0, max: canvasGrid[0].length - 1 });
      const min = boundNumber(x1, { min: 0 });
      const max = boundNumber(x2, { max: canvasGrid[yIndex].length - 1 });

      for (let i = min; i <= max; i++) {
        canvasGrid[i][yIndex] = "x";
      }
    } else {
      // x1 === x2
      // update all elements in x1 between y1 & y2 to 'x'
      const xIndex = Math.max(Math.min(x1, canvasGrid.length - 1), 0);
      const min = Math.max(y1, 0);
      const max = Math.min(y2, canvasGrid[y1].length - 1);

      for (let i = min; i <= max; i++) {
        canvasGrid[xIndex][i] = "x";
      }
    }
  },
  alias: ["line"],
} as Command;
