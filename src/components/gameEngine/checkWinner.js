import checkThreeInARow from "./checkWinners/checkThreeInARow";
import checkThreeInAColumn from "./checkWinners/checkThreeInAColumn";
import checkDiagonals from "./checkWinners/checkDiagonals";

export default function checkWinner(gameMoves) {
  const rowWon = checkThreeInARow(gameMoves);
  const columnWon = checkThreeInAColumn(gameMoves);
  const diagonalsWon = checkDiagonals(gameMoves);
  const gameWon = rowWon || columnWon || diagonalsWon;

  return gameWon;
}
