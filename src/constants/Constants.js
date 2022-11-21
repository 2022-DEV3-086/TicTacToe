export const Constants = {
  TITLE: "Tic Tac Toe",
  NUMBER_OF_TILES_ON_THE_BOARD: 9,
  EMPTY: "",
  PLAYER1: true,
  PLAYER1_SYMBOL: "X",
  PLAYER1_TITLE: "Player 1",
  PLAYER2: false,
  PLAYER2_SYMBOL: "0",
  PLAYER2_TITLE: "Player 2",
  MARK_REQUEST_MESSAGE: "has to mark next",
  WINNER_DECLARATION_MESSAGE: "won the game!",
  TOP_ROW_WINNING_POSITIONS: [0, 1, 2],
  MIDDLE_ROW_WINNING_POSITIONS: [3, 4, 5],
  BOTTOM_ROW_WINNING_POSITIONS: [6, 7, 8],
};

export const horizontalWinningPositions = [
  Constants.TOP_ROW_WINNING_POSITIONS,
  Constants.MIDDLE_ROW_WINNING_POSITIONS,
  Constants.BOTTOM_ROW_WINNING_POSITIONS,
];
