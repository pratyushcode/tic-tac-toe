import React from "react";
import Tile from "./Tile";
import { Strike } from "./Strike";

const Board = ({ tiles, onTileClick, playerTurn, strikeclass }) => {
  return (
    <div className="board">
      <Tile
        onClick={() => onTileClick(0)}
        value={tiles[0]}
        playerTurn={playerTurn}
        className="right-border bottom-border"
      />
      <Tile
        onClick={() => onTileClick(1)}
        value={tiles[1]}
        playerTurn={playerTurn}
        className="right-border bottom-border"
      />
      <Tile
        onClick={() => onTileClick(2)}
        value={tiles[2]}
        playerTurn={playerTurn}
        className=" bottom-border"
      />
      <Tile
        onClick={() => onTileClick(3)}
        value={tiles[3]}
        playerTurn={playerTurn}
        className="right-border bottom-border"
      />
      <Tile
        onClick={() => onTileClick(4)}
        value={tiles[4]}
        playerTurn={playerTurn}
        className="right-border bottom-border"
      />
      <Tile
        onClick={() => onTileClick(5)}
        value={tiles[5]}
        playerTurn={playerTurn}
        className=" bottom-border"
      />
      <Tile
        onClick={() => onTileClick(6)}
        value={tiles[6]}
        playerTurn={playerTurn}
        className="right-border "
      />
      <Tile
        onClick={() => onTileClick(7)}
        value={tiles[7]}
        playerTurn={playerTurn}
        className="right-border "
      />
      <Tile
        onClick={() => onTileClick(8)}
        value={tiles[8]}
        className=" "
        playerTurn={playerTurn}
      />
      <Strike strikeclass={strikeclass} />
    </div>
  );
};

export default Board;
