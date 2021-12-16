import Canvas from "../Canvas";
import quitCommand from "./quitCommand";

describe("run", () => {
  test("destroy", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(2, 2);
    expect(canvas.canvasGrid.length).toBe(2);
    expect(canvas.canvasGrid[0].length).toBe(2);
    quitCommand.run({
      canvas,
      canvasGrid: canvas.canvasGrid,
      args: [],
    });
    expect(canvas.canvasGrid.length).toBe(0);
  });
});
