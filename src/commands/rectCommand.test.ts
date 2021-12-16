import Canvas from "../Canvas";
import rectCommand from "./rectCommand";

describe("run", () => {
  test("draw inside", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(4, 4);
    rectCommand.run({
      canvas,
      canvasGrid: canvas.canvasGrid,
      args: ["1", "1", "3", "3"],
    });

    expect(canvas.canvasGrid).toEqual([
      ["x", "x", "x", " "],
      ["x", " ", "x", " "],
      ["x", "x", "x", " "],
      [" ", " ", " ", " "],
    ]);
  });
  test("invalid arguments: length", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(4, 4);

    expect(() =>
      rectCommand.run({
        canvas,
        canvasGrid: canvas.canvasGrid,
        args: ["1"],
      })
    ).toThrow("argument length expected 4, received 1");
  });
});
