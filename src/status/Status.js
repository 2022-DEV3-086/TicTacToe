import "./Status.css";
import { Constants } from "../constants/Constants";

const Status = ({ player }) => {
  const { PLAYER1, PLAYER1_TITLE, PLAYER2_TITLE, MARK_REQUEST_MESSAGE } =
    Constants;
  return (
    <div data-testid="status" className="status">{`${
      player === PLAYER1 ? PLAYER1_TITLE : PLAYER2_TITLE
    } ${MARK_REQUEST_MESSAGE}`}</div>
  );
};

export default Status;
