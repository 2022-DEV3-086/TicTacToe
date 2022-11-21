import "./TicTacToe.css";
import { Constants } from "../constants/Constants";
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

  const verifyGameCompletion = () => {
    [
      Constants.TOP_ROW_WINNING_POSITIONS,
      Constants.MIDDLE_ROW_WINNING_POSITIONS,
      Constants.BOTTOM_ROW_WINNING_POSITIONS,
    ].forEach((winningRow) => {
      const [
        firstMarkingPosition,
        secondMarkingPosition,
        thirdMarkingPosition,
      ] = winningRow;
      if (
        tiles[firstMarkingPosition] &&
        tiles[firstMarkingPosition] === tiles[secondMarkingPosition] &&
        tiles[firstMarkingPosition] === tiles[thirdMarkingPosition]
      ) {
        setHasWinner(true);
        return;
      }
    });
  };

  useEffect(() => {
    verifyGameCompletion();
  }, [tiles]);

  return (
    <div className="container">
      <div data-testid="header" className="header">
        {TITLE}
      </div>
      <Board tiles={tiles} markOnTheTileAt={markOnTheTileAt} />
      <Status player={currentPlayer} hasWinner={hasWinner} />
    </div>
  );
};

export default TicTacToe;
