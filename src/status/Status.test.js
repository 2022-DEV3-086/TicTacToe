import { render, screen } from "@testing-library/react";
import { TestConstants } from "../constants/TestConstants";
import Status from "./Status";

describe("Status component", () => {
  test("should display correct message if player 2 is going to play next", () => {
    const { PLAYER2, PLAYER2_TITLE, MARK_REQUEST_MESSAGE } = TestConstants;
    render(<Status player={PLAYER2} />);
    const status = screen.getByTestId("status");
    expect(status.textContent).toBe(`${PLAYER2_TITLE} ${MARK_REQUEST_MESSAGE}`);
  });

  test("should display correct message if player 1 is going to play next", () => {
    const { PLAYER1, PLAYER1_TITLE, MARK_REQUEST_MESSAGE } = TestConstants;
    render(<Status player={PLAYER1} />);
    const status = screen.getByTestId("status");
    expect(status.textContent).toBe(`${PLAYER1_TITLE} ${MARK_REQUEST_MESSAGE}`);
  });
});
