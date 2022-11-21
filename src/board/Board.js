import "./Board.css";

const Board = ({ tiles }) => {
  const displayTiles = (tiles) => {
    return tiles.map((value, position) => {
      return (
        <button data-testid="tile" className="tile" key={position}>
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
