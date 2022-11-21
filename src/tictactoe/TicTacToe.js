import "./TicTacToe.css";
import { Constants } from "../constants/Constants";
import Board from "../board/Board";
import { useState } from "react";

const TicTacToe = () => {
  const [tiles] = useState(
    Array(Constants.NUMBER_OF_TILES_ON_THE_BOARD).fill(Constants.EMPTY)
  );

  return (
    <div className="container">
      <div data-testid="header" className="header">
        {Constants.TITLE}
      </div>
      <Board tiles={tiles} />
    </div>
  );
};

export default TicTacToe;
