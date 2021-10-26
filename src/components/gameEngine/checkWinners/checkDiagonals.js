import checkAllEqual from "./checkAllEqual";
export default function checkDiagonals(argsArray) {
  const get1stDiagonal = argsArray.reduce((acc, item, index) => {
    if (index % 4 === 0) {
      return acc.concat(item);
    } else {
      return acc;
    }
  }, []);

  const get2ndDiagonal = argsArray.reduce((acc, item, index) => {
    if (2 * (acc.length + 1) === index && acc.length < 3) {
      return acc.concat(item);
    } else {
      return acc;
    }
  }, []);

  const diagonalsWon =
    checkAllEqual(get1stDiagonal) || checkAllEqual(get2ndDiagonal);

  return diagonalsWon;
}
