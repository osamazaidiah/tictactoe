import PopupModal from "../PopupModal";

export default function PlayerWon({
  player = "⭕",
  gameWon = false,
  resetGame = (f) => f
}) {
  const GameWonNotifiction = () => (
    <div>
      <h1>🎉 Congrats! 🎉</h1>
      <h2>Player {player} won! 💪</h2>
      <p>Tap anywhere to play again! 😍😍</p>
    </div>
  );
  return gameWon ? (
    <PopupModal
      isVisible={gameWon}
      child={<GameWonNotifiction />}
      setVisibility={resetGame}
    />
  ) : (
    ""
  );
}
