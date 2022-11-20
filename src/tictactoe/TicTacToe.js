import "./TicTacToe.css";
import { Constants } from "../constants/Constants";
import Board from "../board/Board";

const TicTacToe = () => {
  return (
    <div className="container">
      <div data-testid="header" className="header">
        {Constants.TITLE}
      </div>
      <Board />
    </div>
  );
};

export default TicTacToe;
