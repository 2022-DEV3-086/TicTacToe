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
  sameMarkingsOnMiddleRow: {
    POSITIONS: [0, 3, 7, 4, 6, 5],
    WINNER: TestConstants.PLAYER2_TITLE,
  },
  sameMarkingsOnBottomRow: {
    POSITIONS: [6, 0, 8, 3, 7],
    WINNER: TestConstants.PLAYER1_TITLE,
  },
  sameMarkingsOnLeftColumn: {
    POSITIONS: [6, 5, 0, 4, 3],
    WINNER: TestConstants.PLAYER1_TITLE,
  },
  sameMarkingsOnMiddleColumn: {
    POSITIONS: [0, 1, 5, 4, 3, 7],
    WINNER: TestConstants.PLAYER2_TITLE,
  },
  sameMarkingsOnRightColumn: {
    POSITIONS: [0, 2, 4, 5, 7, 8],
    WINNER: TestConstants.PLAYER2_TITLE,
  },
  sameMarkingsFromleftTopToRightBottomDiagonal: {
    POSITIONS: [0, 1, 4, 5, 8],
    WINNER: TestConstants.PLAYER1_TITLE,
  },
};
