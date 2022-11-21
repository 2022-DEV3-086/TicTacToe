import { render, screen } from "@testing-library/react";
import { TestConstants } from "../constants/TestConstants";
import Board from "./Board";

describe("Board component", () => {
  test("should have 3x3 tiles in it", () => {
    render(
      <Board
        tiles={Array(TestConstants.NUMBER_OF_TILES_ON_THE_BOARD).fill(
          TestConstants.EMPTY
        )}
      />
    );
    const tiles = screen.queryAllByTestId("tile");
    expect(tiles).toHaveLength(TestConstants.NUMBER_OF_TILES_ON_THE_BOARD);
  });

  test("tiles should have empty value as initial marking", () => {
    render(
      <Board
        tiles={Array(TestConstants.NUMBER_OF_TILES_ON_THE_BOARD).fill(
          TestConstants.EMPTY
        )}
      />
    );
    const tiles = screen.queryAllByTestId("tile");
    for (const tile of tiles) {
      expect(tile.textContent).toBe(TestConstants.EMPTY);
    }
  });
});
