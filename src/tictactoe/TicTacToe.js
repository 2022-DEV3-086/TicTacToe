import "./TicTacToe.css";
import {
  Constants,
  horizontalWinningPositions,
  verticalWinningPositions,
} from "../constants/Constants";
import Board from "../board/Board";
import { useState, useEffect } from "react";
import Status from "../status/Status";

const TicTacToe = () => {
  const {
    PLAYER1,
    PLAYER2,
    PLAYER1_SYMBOL,
    PLAYER2_SYMBOL,
    EMPTY,
    TITLE,
    NUMBER_OF_TILES_ON_THE_BOARD,
  } = Constants;

  const [tiles, setTiles] = useState(
    Array(NUMBER_OF_TILES_ON_THE_BOARD).fill(EMPTY)
  );

  const [currentPlayer, setCurrentPlayer] = useState(true);

  const [hasWinner, setHasWinner] = useState(false);

  const [draw, setDraw] = useState(false);

  const markOntheDesiredPosition = (currentPosition, desiredPosition, tile) => {
    if (currentPosition === desiredPosition) {
      return currentPlayer === PLAYER1 ? PLAYER1_SYMBOL : PLAYER2_SYMBOL;
    }
    return tile;
  };

  const markOnTheTileAt = (desiredPosition) => {
    const tilesAfterMarking = tiles.map((tile, position) => {
      return markOntheDesiredPosition(position, desiredPosition, tile);
    });
    setTiles(tilesAfterMarking);
    switchPlayer();
  };

  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1);
  };

  const allTilesMarked = () => {
    return tiles.filter((value) => value === Constants.EMPTY).length === 0;
  };

  const thePlayerHasMarkedAllPositionsIn = (
    firstPosition,
    secondPosition,
    thirdPosition
  ) => {
    if (
      tiles[firstPosition] &&
      tiles[firstPosition] === tiles[secondPosition] &&
      tiles[firstPosition] === tiles[thirdPosition]
    ) {
      return true;
    }
  };

  const verifyGameCompletion = () => {
    [
      ...horizontalWinningPositions,
      ...verticalWinningPositions,
      Constants.LEFT_TOP_TO_RIGHT_BOTTOM_DIAGONAL_WINNING_POSITIONS,
      Constants.RIGHT_TOP_TO_LEFT_BOTTOM_DIAGONAL_WINNING_POSITIONS,
    ].forEach((winningRow) => {
      if (thePlayerHasMarkedAllPositionsIn(...winningRow)) {
        setHasWinner(true);
        return;
      }
    });
    setDraw(allTilesMarked());
  };

  useEffect(() => {
    verifyGameCompletion();
  }, [tiles]);

  const resetGame = () => {
    setTiles(Array(9).fill(Constants.EMPTY));
    setCurrentPlayer(Constants.PLAYER1);
    setHasWinner(false);
    setDraw(false);
  };

  return (
    <div className="container">
      <div data-testid="header" className="header">
        {TITLE}
      </div>
      <Board
        tiles={tiles}
        markOnTheTileAt={markOnTheTileAt}
        hasWinner={hasWinner}
      />
      <Status player={currentPlayer} hasWinner={hasWinner} draw={draw} />
      <button data-testid="reset" className="reset" onClick={resetGame}>
        {Constants.RESET_BUTTON_TITLE}
      </button>
    </div>
  );
};

export default TicTacToe;
