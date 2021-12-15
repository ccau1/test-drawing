import { Command } from "..";

export default {
  run: ({ canvas }) => {
    // destroy grid
    canvas.destroyGrid();
  },
  alias: ["create"],
} as Command;
