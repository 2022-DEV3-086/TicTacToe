import "./Board.css";
import { Constants } from "../constants/Constants";

const Board = ({ tiles, markOnTheTileAt, hasWinner }) => {
  const displayTiles = (tiles) => {
    return tiles.map((value, position) => {
      return (
        <button
          data-testid="tile"
          className="tile"
          key={position}
          value={position}
          disabled={value !== Constants.EMPTY || hasWinner}
          onClick={(event) => markOnTheTileAt(parseInt(event.target.value))}
        >
          {value}
        </button>
      );
    });
  };

  return (
    <div data-testid="board" className="board">
      {displayTiles(tiles)}
    </div>
  );
};

export default Board;
