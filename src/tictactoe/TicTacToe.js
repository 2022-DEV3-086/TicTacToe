import "./TicTacToe.css";
import { Constants } from "../constants/Constants";

const TicTacToe = () => {
  return (
    <div className="container">
      <div data-testid="header" className="header">
        {Constants.TITLE}
      </div>
    </div>
  );
};

export default TicTacToe;
