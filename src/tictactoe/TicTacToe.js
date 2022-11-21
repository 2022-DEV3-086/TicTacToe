import "./TicTacToe.css";
import { Constants } from "../constants/Constants";
import Board from "../board/Board";
import { useState } from "react";

const TicTacToe = () => {
  const [tiles, setTiles] = useState(
    Array(Constants.NUMBER_OF_TILES_ON_THE_BOARD).fill(Constants.EMPTY)
  );

  const [currentPlayer, setCurrentPlayer] = useState(true);

  const markOntheDesiredPosition = (currentPosition, desiredPosition, tile) => {
    if (currentPosition === desiredPosition) {
      return currentPlayer === Constants.PLAYER1
        ? Constants.PLAYER1_SYMBOL
        : Constants.PLAYER2_SYMBOL;
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
    setCurrentPlayer(
      currentPlayer === Constants.PLAYER1
        ? Constants.PLAYER2
        : Constants.PLAYER1
    );
  };

  return (
    <div className="container">
      <div data-testid="header" className="header">
        {Constants.TITLE}
      </div>
      <Board tiles={tiles} markOnTheTileAt={markOnTheTileAt} />
    </div>
  );
};

export default TicTacToe;
