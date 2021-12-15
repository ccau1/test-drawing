import { Command } from "..";

export default {
  run: ({ canvas }) => {
    canvas.destroyGrid();
  },
  alias: ["create"],
} as Command;
