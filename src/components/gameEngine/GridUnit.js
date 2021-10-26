export default function GridUnit({ selection, setGameMove, index }) {
  return (
    <div onClick={() => setGameMove(index)}>
      <p style={{ fontSize: "3rem" }}>{selection}</p>
    </div>
  );
}
