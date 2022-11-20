import { render, screen } from "@testing-library/react";
import { TestConstants } from "../constants/TestConstants";
import TicTacToe from "./TicTacToe";

describe("TicTacToe component", () => {
  test("should display header with title", () => {
    render(<TicTacToe />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
    expect(header.textContent).toBe(TestConstants.TITLE);
  });

  test("should display the board", () => {
    render(<TicTacToe />);
    const board = screen.getByTestId("board");
    expect(board).toBeInTheDocument();
  });
});
