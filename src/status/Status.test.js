import { render, screen } from "@testing-library/react";
import { TestConstants } from "../constants/TestConstants";
import Status from "./Status";

describe("Status component", () => {
  const testStatusMessageOfThePlayer = (player) => {
    const { PLAYER1, PLAYER1_TITLE, PLAYER2_TITLE, MARK_REQUEST_MESSAGE } =
      TestConstants;
    render(<Status player={player} />);
    const status = screen.getByTestId("status");
    expect(status.textContent).toBe(
      `${
        player === PLAYER1 ? PLAYER1_TITLE : PLAYER2_TITLE
      } ${MARK_REQUEST_MESSAGE}`
    );
  };

  test("should display correct message if player 2 is going to play next", () => {
    testStatusMessageOfThePlayer(TestConstants.PLAYER1);
  });

  test("should display correct message if player 1 is going to play next", () => {
    testStatusMessageOfThePlayer(TestConstants.PLAYER2);
  });
});
