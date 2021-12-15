import { Command } from "..";

export default {
  run: ({ args }) => {
    if (args.length !== 3)
      throw new Error(`argument length expected 3, received ${args.length}`);

    // const x = args[0],
    //   y = args[1],
    //   c = args[2];
  },
  alias: ["fill"],
} as Command;
