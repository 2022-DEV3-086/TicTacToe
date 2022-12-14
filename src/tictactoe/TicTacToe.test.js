import { render, screen, fireEvent } from "@testing-library/react";
import { TestConstants, GameData } from "../constants/TestConstants";
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

  test("should show the reset button with title", () => {
    const resetButton = screen.getByTestId("reset");
    expect(resetButton).toBeInTheDocument();
    expect(resetButton.textContent).toBe(TestConstants.RESET_BUTTON_TITLE);
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

  const markAllPositionsAndCheckTheExpectation = (positions, expectation) => {
    positions.forEach((position) => {
      fireEvent.click(tiles[position]);
    });
    const status = screen.getByTestId("status");
    expect(status.textContent).toBe(expectation);
  };

  const markThePositionsAndCheckTheWinner = ({
    POSITIONS: positions,
    WINNER: winner,
  }) => {
    const { WINNER_DECLARATION_MESSAGE } = TestConstants;
    markAllPositionsAndCheckTheExpectation(
      positions,
      `${winner} ${WINNER_DECLARATION_MESSAGE}`
    );
  };

  const markAllPositionsAndCheckForDraw = ({ POSITIONS: positions }) => {
    const { DRAW_DECLARATION_MESSAGE } = TestConstants;
    markAllPositionsAndCheckTheExpectation(positions, DRAW_DECLARATION_MESSAGE);
  };

  const simulateClicksOn = (...items) => {
    for (const item of items) {
      fireEvent.click(item);
    }
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

  test("declare a player as winner,if he scores top row winning position", () => {
    markThePositionsAndCheckTheWinner(GameData.sameMarkingsOnTopRow);
  });

  test("declare a player as winner,if he scores middle row winning position", () => {
    markThePositionsAndCheckTheWinner(GameData.sameMarkingsOnMiddleRow);
  });

  test("declare a player as winner,if he scores bottom row winning position", () => {
    markThePositionsAndCheckTheWinner(GameData.sameMarkingsOnBottomRow);
  });

  test("declare a player as winner,if he scores left column winning position", () => {
    markThePositionsAndCheckTheWinner(GameData.sameMarkingsOnLeftColumn);
  });

  test("declare a player as winner,if he scores middle column winning position", () => {
    markThePositionsAndCheckTheWinner(GameData.sameMarkingsOnMiddleColumn);
  });

  test("declare a player as winner,if he scores right column winning position", () => {
    markThePositionsAndCheckTheWinner(GameData.sameMarkingsOnRightColumn);
  });

  test("declare a player as winner,if he scores from left top to right bottom diagonal winning position", () => {
    markThePositionsAndCheckTheWinner(
      GameData.sameMarkingsFromleftTopToRightBottomDiagonal
    );
  });

  test("declare a player as winner,if he scores from right top to left bottom diagonal winning position", () => {
    markThePositionsAndCheckTheWinner(
      GameData.sameMarkingsFromrightTopToLeftBottomDiagonal
    );
  });

  test("declare the game as draw,if all tiles are marked and no player won the game", () => {
    markAllPositionsAndCheckForDraw(GameData.gameDrawMarkings);
  });

  test("all tiles on the board get disabled, if there is a winner", () => {
    markThePositionsAndCheckTheWinner(
      GameData.sameMarkingsFromrightTopToLeftBottomDiagonal
    );
    tiles.forEach((tile) => {
      expect(tile).toHaveAttribute("disabled");
    });
  });

  test("all tiles on the board get disabled, if there is a winner", () => {
    markThePositionsAndCheckTheWinner(
      GameData.sameMarkingsFromrightTopToLeftBottomDiagonal
    );
    tiles.forEach((tile) => {
      expect(tile).toHaveAttribute("disabled");
    });
  });

  test("the reset button resets the game", () => {
    const resetButton = screen.getByTestId("reset");
    simulateClicksOn(...tiles, resetButton);
    testTheMarkOf(tiles, TestConstants.EMPTY);
    const status = screen.getByTestId("status");
    expect(status.textContent).toBe(
      `${TestConstants.PLAYER1_TITLE} ${TestConstants.MARK_REQUEST_MESSAGE}`
    );
  });
});
