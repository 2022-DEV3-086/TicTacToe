export const TestConstants = {
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
};

export const GameData = {
  sameMarkingsOnTopRow: {
    POSITIONS: [0, 5, 1, 7, 2],
    WINNER: TestConstants.PLAYER1_TITLE,
  },
};
