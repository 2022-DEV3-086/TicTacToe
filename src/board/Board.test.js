import { render, screen } from "@testing-library/react";
import { TestConstants } from "../constants/TestConstants";
import Board from "./Board";

describe("Board component", () => {
  let tiles;
  beforeEach(() => {
    render(
      <Board
        tiles={Array(TestConstants.NUMBER_OF_TILES_ON_THE_BOARD).fill(
          TestConstants.EMPTY
        )}
      />
    );
    tiles = screen.queryAllByTestId("tile");
  });

  test("should have 3x3 tiles in it", () => {
    expect(tiles).toHaveLength(TestConstants.NUMBER_OF_TILES_ON_THE_BOARD);
  });

  test("tiles should have empty value as initial marking", () => {
    for (const tile of tiles) {
      expect(tile.textContent).toBe(TestConstants.EMPTY);
    }
  });
});
