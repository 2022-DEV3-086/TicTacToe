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
    testTheMarkOnClicking(firstLeftTile, "X");
    testTheMarkOf(remainingTiles, TestConstants.EMPTY);
  });
});
