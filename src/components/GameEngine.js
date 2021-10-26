import { useState, useEffect } from "react";
import TurnSelector from "./gameEngine/TurnSelector";
import GridUnit from "./gameEngine/GridUnit";
import checkWinner from "./gameEngine/checkWinner";
import PlayerWonPopUp from "./gameEngine/PlayerWonPopUp";

export default function GameEngine() {
  // Generate base game and create an empty game with question marks as placeholders
  const gameSize = [...Array(9)];
  const emptyGame = gameSize.reduce((acc, i) => acc.concat("?"), []);
  const players = ["⭕", "❌"];

  // Game state variables
  const [currentTurn, setCurrentTurn] = useState(players[0]);
  const [gameMoves, setGameMoves] = useState(emptyGame);
  const [gameWon, setGameWon] = useState(false);

  //function to update the box once the user makes a move
  const setNewGameMove = (i) => {
    // Check if grid box is not already taken
    if (gameMoves[i] !== "?") return;

    // Make a new move
    const newGameMoves = gameMoves.reduce((acc, item, index) => {
      if (index === i) {
        return acc.concat(currentTurn);
      } else {
        return acc.concat(item);
      }
    }, []);
    // Update game state with new move
    setGameMoves([...newGameMoves]);
  };

  //Function to reset game
  const resetGame = () => {
    setGameWon(false);
    setCurrentTurn(players[1]);
    setGameMoves(emptyGame);
  };

  //Effects to switch the player and check for a win
  useEffect(() => {
    // check for a win
    const gameWonCheck = checkWinner(gameMoves);
    if (gameWonCheck) {
      setGameWon(true);
      return;
    }
    // if game is full, restart
    if (gameMoves.every((e) => e !== "?")) resetGame();

    //finally, do the next turn
    const nextTurn = currentTurn === "⭕" ? "❌" : "⭕";
    setCurrentTurn(nextTurn);
  }, [gameMoves]);

  return (
    <>
      {/* Popup to show winner if game is won and then restart the game */}
      <PlayerWonPopUp
        gameWon={gameWon}
        resetGame={resetGame}
        player={currentTurn}
      />
      {/* Mid-game restart button for players */}
      <button onClick={resetGame}>RESET GAME!</button>
      {/* a place holder to show who's turn it is */}
      <TurnSelector currentTurn={currentTurn} />

      {/* game grid */}
      <div className="container">
        {gameSize.map((x, i) => (
          <GridUnit
            key={i}
            index={i}
            selection={gameMoves[i]}
            setGameMove={setNewGameMove}
          />
        ))}
      </div>
    </>
  );
}
