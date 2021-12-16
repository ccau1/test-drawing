import Canvas from "./Canvas";
import { boundNumber, fillSurrounding, getSurroundingCells } from "./utils";

describe("boundNumber", () => {
  test("in range", () => {
    const result = boundNumber(10, { min: 0, max: 20 });
    expect(result).toBe(10);
  });
  test("lower than min", () => {
    const result = boundNumber(-10, { min: 0, max: 20 });
    expect(result).toBe(0);
  });
  test("higher than max", () => {
    const result = boundNumber(100, { min: 0, max: 20 });

    expect(result).toBe(20);
  });
});

describe("getSurroundingCells", () => {
  test("center of grid", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(3, 3);
    const cells = getSurroundingCells(1, 1, canvas.canvasGrid);
    expect(cells.length).toBe(8);
    expect(cells).toEqual([
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 0 },
      { x: 1, y: 2 },
      { x: 2, y: 0 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
    ]);
  });
  test("top left of grid", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(3, 3);
    const cells = getSurroundingCells(0, 0, canvas.canvasGrid);
    expect(cells.length).toBe(3);
    expect(cells).toEqual([
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
    ]);
  });
  test("top center of grid", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(3, 3);
    const cells = getSurroundingCells(1, 0, canvas.canvasGrid);
    expect(cells.length).toBe(5);
    expect(cells).toEqual([
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 0 },
      { x: 2, y: 1 },
    ]);
  });
  test("bottom right of grid", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(3, 3);
    const cells = getSurroundingCells(2, 2, canvas.canvasGrid);
    expect(cells.length).toBe(3);
    expect(cells).toEqual([
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 1 },
    ]);
  });
  test("right of grid", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(3, 3);
    const cells = getSurroundingCells(2, 1, canvas.canvasGrid);
    expect(cells.length).toBe(5);
    expect(cells).toEqual([
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 0 },
      { x: 2, y: 2 },
    ]);
  });
  test("left of grid", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(3, 3);
    const cells = getSurroundingCells(0, 1, canvas.canvasGrid);
    expect(cells.length).toBe(5);
    expect(cells).toEqual([
      { x: 0, y: 0 },
      { x: 0, y: 2 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 },
    ]);
  });
  test("bottom of grid", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(3, 3);
    const cells = getSurroundingCells(1, 2, canvas.canvasGrid);
    expect(cells.length).toBe(5);
    expect(cells).toEqual([
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
    ]);
  });
});

describe("fillSurrounding", () => {
  test("fill all", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(4, 4);

    const canvasGrid = JSON.parse(JSON.stringify(canvas.canvasGrid));

    fillSurrounding(1, 1, " ", "o", canvasGrid);
    expect(canvasGrid).toEqual([
      ["o", "o", "o", "o"],
      ["o", "o", "o", "o"],
      ["o", "o", "o", "o"],
      ["o", "o", "o", "o"],
    ]);
  });
  test("fill outside box", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(4, 4);
    canvas.canvasGrid[0][1] = "x";
    canvas.canvasGrid[1][1] = "x";
    canvas.canvasGrid[2][1] = "x";
    canvas.canvasGrid[2][0] = "x";
    const canvasGrid = JSON.parse(JSON.stringify(canvas.canvasGrid));

    fillSurrounding(0, 3, " ", "o", canvasGrid);
    expect(canvasGrid).toEqual([
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
    const canvasGrid = JSON.parse(JSON.stringify(canvas.canvasGrid));

    fillSurrounding(0, 0, " ", "o", canvasGrid);
    expect(canvasGrid).toEqual([
      ["o", "x", " ", " "],
      ["o", "x", " ", " "],
      ["x", "x", " ", " "],
      [" ", " ", " ", " "],
    ]);
  });
  test("fill outside grid", () => {
    const canvas = new Canvas();
    canvas.generateCanvasGrid(4, 4);
    const canvasGrid = JSON.parse(JSON.stringify(canvas.canvasGrid));

    fillSurrounding(-1, 0, " ", "o", canvasGrid);
    expect(canvasGrid).toEqual([
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
    ]);
  });
});
