import React from "react";
import GameState from "./GameState";

const ResetButton = ({ setGameState, setTiles, setstrikeclass }) => {
  const handleclick = () => {
    setGameState(GameState.inProgress);
    setTiles(Array(9).fill(null));
    setstrikeclass("");
  };
  return (
    <button className="reset-button" onClick={handleclick}>
      Reset
    </button>
  );
};

export default ResetButton;
