import checkAllEqual from "./checkAllEqual";
export default function checkThreeInARow(array) {
  //Check one row
  const row = array.slice(0, 3);
  const rowWins = checkAllEqual(row);
  if (rowWins) return true;

  //take away remaining rows and call back the function
  const remainingRows = array.slice(3);
  const otherRowWins =
    remainingRows.length > 0 ? checkThreeInARow(remainingRows) : false;
  return otherRowWins;
}
