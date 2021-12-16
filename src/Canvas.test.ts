import Canvas from "./Canvas";
import commands from "./commands";

describe("getters", () => {
  test("width & height: empty grid", () => {
    const canvas = new Canvas();
    expect(canvas.width).toBe(0);
    expect(canvas.height).toBe(0);
  });
  test("width & height: 4x4 grid", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(4, 4);
    expect(canvas.width).toBe(4);
    expect(canvas.height).toBe(4);
  });
  test("canvasGrid: empty grid", () => {
    const canvas = new Canvas();
    expect(canvas.canvasGrid.length).toBe(0);
  });
  test("canvasGrid: 4x4 grid", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(4, 4);
    expect(canvas.canvasGrid.length).toBe(4);
    expect(canvas.canvasGrid[0].length).toBe(4);
  });
  test("commands", () => {
    const canvas = new Canvas();
    expect(Object.keys(canvas.commands).length).toBe(
      Object.keys(commands).length
    );
  });
});

describe("create & destroy", () => {
  test("generate grid: 1x1", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(1, 1);
    expect(canvas.canvasGrid.length).toBe(1);
    expect(canvas.canvasGrid[0].length).toBe(1);
  });
  test("destroy grid", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(1, 1);
    canvas.destroyGrid();
    expect(canvas.canvasGrid.length).toBe(0);
  });
});

describe("take action", () => {
  test("existing action", () => {
    const canvas = new Canvas();
    expect(canvas.canvasGrid.length).toBe(0);
    canvas.takeAction("C", ["20", "4"]);
    expect(canvas.canvasGrid.length).toBe(20);
    expect(canvas.canvasGrid[0].length).toBe(4);
  });
  test("existing action via alias", () => {
    const canvas = new Canvas();
    expect(canvas.canvasGrid.length).toBe(0);
    canvas.takeAction("CREATE", ["20", "4"]);
    expect(canvas.canvasGrid.length).toBe(20);
    expect(canvas.canvasGrid[0].length).toBe(4);
  });
  test("non-existing action", () => {
    const canvas = new Canvas();
    expect(() => canvas.takeAction("NO", [])).toThrow("type not found");
  });
  test("error action", () => {
    const canvas = new Canvas();
    expect(() => canvas.takeAction("L", ["-1", "-1", "-1", "-1"])).toThrow(
      "all args must be value 1 or higher"
    );
  });
});

describe("addCommands", () => {
  const canvas = new Canvas();
  canvas.addCommands({ test: { run: () => "test" } });

  expect(
    canvas.commands["test"].run({
      canvas,
      canvasGrid: canvas.canvasGrid,
      args: [],
    })
  ).toBe("test");
});
