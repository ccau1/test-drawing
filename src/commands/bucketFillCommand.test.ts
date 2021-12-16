import Canvas from "../Canvas";
import bucketFillCommand from "./bucketFillCommand";

describe("run", () => {
  test("fill center", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(3, 3);
    bucketFillCommand.run({
      canvas,
      canvasGrid: canvas.canvasGrid,
      args: ["1", "1", "o"],
    });

    expect(canvas.canvasGrid).toEqual([
      ["o", "o", "o"],
      ["o", "o", "o"],
      ["o", "o", "o"],
    ]);
  });
  test("fill outside box", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(4, 4);
    canvas.canvasGrid[0][1] = "x";
    canvas.canvasGrid[1][1] = "x";
    canvas.canvasGrid[2][1] = "x";
    canvas.canvasGrid[2][0] = "x";

    bucketFillCommand.run({
      canvas,
      canvasGrid: canvas.canvasGrid,
      args: ["1", "3", "o"],
    });

    expect(canvas.canvasGrid).toEqual([
      [" ", "x", "o", "o"],
      [" ", "x", "o", "o"],
      ["x", "x", "o", "o"],
      ["o", "o", "o", "o"],
    ]);
  });
  test("fill inside box", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(4, 4);
    canvas.canvasGrid[0][1] = "x";
    canvas.canvasGrid[1][1] = "x";
    canvas.canvasGrid[2][1] = "x";
    canvas.canvasGrid[2][0] = "x";

    bucketFillCommand.run({
      canvas,
      canvasGrid: canvas.canvasGrid,
      args: ["1", "1", "o"],
    });

    expect(canvas.canvasGrid).toEqual([
      ["o", "x", " ", " "],
      ["o", "x", " ", " "],
      ["x", "x", " ", " "],
      [" ", " ", " ", " "],
    ]);
  });
  test("invalid argument length", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(4, 4);

    expect(() =>
      bucketFillCommand.run({
        canvas,
        canvasGrid: canvas.canvasGrid,
        args: ["1"],
      })
    ).toThrow("argument length expected 3, received 1");
  });
});
