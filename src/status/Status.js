import "./Status.css";
import { Constants } from "../constants/Constants";

const Status = ({ player, hasWinner, draw }) => {
  const {
    PLAYER1,
    PLAYER1_TITLE,
    PLAYER2_TITLE,
    MARK_REQUEST_MESSAGE,
    WINNER_DECLARATION_MESSAGE,
    DRAW_DECLARATION_MESSAGE,
  } = Constants;

  return (
    <div data-testid="status" className="status">
      {hasWinner
        ? `${
            player === PLAYER1 ? PLAYER2_TITLE : PLAYER1_TITLE
          } ${WINNER_DECLARATION_MESSAGE}`
        : draw
        ? DRAW_DECLARATION_MESSAGE
        : `${
            player === PLAYER1 ? PLAYER1_TITLE : PLAYER2_TITLE
          } ${MARK_REQUEST_MESSAGE}`}
    </div>
  );
};

export default Status;
