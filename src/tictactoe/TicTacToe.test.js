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

  test("the first tile should be marked as X, upon clicking", () => {
    const [firstLeftTile, ...remainingTiles] = tiles;
    fireEvent.click(firstLeftTile);
    expect(firstLeftTile.textContent).toBe("X");
    remainingTiles.forEach((tile) => {
      expect(tile.textContent).toBe(TestConstants.EMPTY);
    });
  });
});
