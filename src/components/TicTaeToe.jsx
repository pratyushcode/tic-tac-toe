import React, { useEffect, useState } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import ResetButton from "./ResetButton";

const PLAYER_X = "X";
const PLAYER_O = "O";

const winingcombinations=[
  {combo:[0,1,2],strikeclass:"strike-row-1"},
  {combo:[3,4,5],strikeclass:"strike-row-2"},
  {combo:[6,7,8],strikeclass:"strike-row-3"},
  {combo:[0,3,6],strikeclass:"strike-column-1"},
  {combo:[1,4,7],strikeclass:"strike-column-2"},
  {combo:[2,5,8],strikeclass:"strike-column-3"},
  {combo:[0,4,8],strikeclass:"strike-diagonal-1"},
  {combo:[2,4,6],strikeclass:"strike-diagonal-2"},  
]

function checkWinner(tiles,setstrikeclass,setGameState){
  for(const {combo,strikeclass } of winingcombinations)
  {
    const tileValue1=tiles[combo[0]];
    const tileValue2=tiles[combo[1]];
    const tileValue3=tiles[combo[2]];

    if(tileValue1!==null &&  tileValue1===tileValue2 && tileValue1===tileValue3)
    {
      setstrikeclass(strikeclass);
      if(tileValue1==PLAYER_O) setGameState(GameState.playerOwins)
      else setGameState(GameState.playerXwins);
    return;
    }

  }
  const AllTileOver=tiles.every((tile)=>tile!==null)
  if(AllTileOver)setGameState(GameState.draw);
}

const TicTaeToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setplayerTurn] = useState(PLAYER_X);
  const [strikeclass,setstrikeclass]=useState();
  const [gameState,setGameState]=useState(GameState.inProgress);
 

 

  const handleTileClick = (index) => {
    if(gameState!=GameState.inProgress)return;
    if (tiles[index] != null) return;
    const newTiles = [...tiles];

    newTiles[index] = playerTurn;
    if (playerTurn === PLAYER_X) setplayerTurn(PLAYER_O);
    else setplayerTurn(PLAYER_X);
    setTiles(newTiles);
  };

  useEffect(()=>
  {
    checkWinner(tiles,setstrikeclass,setGameState);
  },[tiles])

  const resetTrue=gameState!==GameState.inProgress;
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board tiles={tiles} onTileClick={handleTileClick} playerTurn={playerTurn} strikeclass={strikeclass} />
      <GameOver gameState={gameState}/>
      {
        resetTrue && <ResetButton setTiles={setTiles} setGameState={setGameState} setstrikeclass={setstrikeclass}/>
      }
      
      
    </div>
  );
};

export default TicTaeToe;
