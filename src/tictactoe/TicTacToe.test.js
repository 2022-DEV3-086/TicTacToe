import { render, screen, fireEvent } from "@testing-library/react";
import { TestConstants } from "../constants/TestConstants";
import TicTacToe from "./TicTacToe";

describe("TicTacToe component", () => {
  beforeEach(() => {
    render(<TicTacToe />);
  });

  test("should display header with title", () => {
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
    expect(header.textContent).toBe(TestConstants.TITLE);
  });

  test("should display the board", () => {
    const board = screen.getByTestId("board");
    expect(board).toBeInTheDocument();
  });

  test("should display the status", () => {
    const status = screen.getByTestId("status");
    expect(status).toBeInTheDocument();
  });
});

describe("The TicTacToe game works fine when", () => {
  let tiles;
  beforeEach(() => {
    render(<TicTacToe />);
    tiles = screen.queryAllByTestId("tile");
  });

  const testTheMarkOnClicking = (tile, expectedMarking) => {
    fireEvent.click(tile);
    expect(tile.textContent).toBe(expectedMarking);
  };

  const testTheMarkOf = (tiles, expectedMarking) => {
    tiles.forEach((tile) => {
      expect(tile.textContent).toBe(expectedMarking);
    });
  };

  test("the first tile should be marked as X, upon clicking", () => {
    const [firstLeftTile, ...remainingTiles] = tiles;
    testTheMarkOnClicking(firstLeftTile, TestConstants.PLAYER1_SYMBOL);
    testTheMarkOf(remainingTiles, TestConstants.EMPTY);
  });

  test("tiles display X and 0 alternatively, upon clicking", () => {
    const [firstLeftTile, firstMiddleTile, ...remainingTiles] = tiles;
    testTheMarkOnClicking(firstLeftTile, TestConstants.PLAYER1_SYMBOL);
    testTheMarkOnClicking(firstMiddleTile, TestConstants.PLAYER2_SYMBOL);
    testTheMarkOf(remainingTiles, TestConstants.EMPTY);
  });

  test("a tile cannot be marked again, if it is already marked.", () => {
    const [firstLeftTile, ...remainingTiles] = tiles;
    fireEvent.click(firstLeftTile);
    expect(firstLeftTile).toHaveAttribute("disabled");
  });
});
