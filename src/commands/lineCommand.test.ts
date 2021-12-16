import Canvas from "../Canvas";
import lineCommand from "./lineCommand";

describe("run", () => {
  test("draw line: horizontal", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(2, 2);

    lineCommand.run({
      canvas,
      canvasGrid: canvas.canvasGrid,
      args: ["1", "1", "2", "1"],
    });

    expect(canvas.canvasGrid).toEqual([
      ["x", " "],
      ["x", " "],
    ]);
  });
  test("draw line: vertical", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(2, 2);

    lineCommand.run({
      canvas,
      canvasGrid: canvas.canvasGrid,
      args: ["1", "1", "1", "2"],
    });

    expect(canvas.canvasGrid).toEqual([
      ["x", "x"],
      [" ", " "],
    ]);
  });
  test("invalid arguments: negative numbers", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(4, 4);
    expect(() =>
      lineCommand.run({
        canvas,
        canvasGrid: canvas.canvasGrid,
        args: ["-1", "1", "1", "1"],
      })
    ).toThrow("all args must be value 1 or higher");
  });
  test("invalid arguments: length", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(4, 4);
    expect(() =>
      lineCommand.run({
        canvas,
        canvasGrid: canvas.canvasGrid,
        args: ["1"],
      })
    ).toThrow("argument length expected 4, received 1");
  });
});
