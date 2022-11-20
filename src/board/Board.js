import "./Board.css";
import { Constants } from "../constants/Constants";

const Board = () => {
  const displayTiles = () => {
    let tiles = [];
    for (
      let tilePosition = 0;
      tilePosition < Constants.NUMBER_OF_TILES_ON_THE_BOARD;
      tilePosition++
    ) {
      tiles.push(
        <button data-testid="tile" className="tile" key={tilePosition}></button>
      );
    }
    return tiles;
  };

  return (
    <div data-testid="board" className="board">
      {displayTiles()}
    </div>
  );
};

export default Board;
