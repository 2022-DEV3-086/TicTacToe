import { render, screen } from "@testing-library/react";
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
