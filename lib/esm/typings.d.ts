type DrawType = "L" | "R" | "B";

type CanvasGrid = string[][];

type Canvas = import("./Canvas").default;

interface CommandFunction {
  (options: { canvasGrid: CanvasGrid; args: string[]; canvas: Canvas }): void;
}

interface Command {
  run: CommandFunction;
  alias?: string[];
}

interface Commands {
  [drawType: string]: Command;
}
