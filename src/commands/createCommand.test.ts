import Canvas from "../Canvas";
import createCommand from "./createCommand";

describe("run", () => {
  test("create grid", () => {
    const canvas = new Canvas();
    createCommand.run({
      canvas,
      canvasGrid: canvas.canvasGrid,
      args: ["2", "2"],
    });
    expect(canvas.canvasGrid).toEqual([
      [" ", " "],
      [" ", " "],
    ]);
  });
  test("invalid argument types", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(4, 4);
    expect(() =>
      createCommand.run({
        canvas,
        canvasGrid: canvas.canvasGrid,
        args: ["abc", "1"],
      })
    ).toThrow("invalid numbers");
  });
  test("invalid argument length", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(4, 4);
    expect(() =>
      createCommand.run({
        canvas,
        canvasGrid: canvas.canvasGrid,
        args: ["1"],
      })
    ).toThrow("argument length expected 2, received 1");
  });
});
