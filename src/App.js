import "./styles.css";
import Header from "./components/Header";
import GameEngine from "./components/GameEngine";

export default function App() {
  return (
    <div className="App">
      <div className="mainContent">
        <div className="header">
          <Header />
        </div>
        <div className="gameArea">
          <GameEngine />
        </div>
      </div>
    </div>
  );
}
