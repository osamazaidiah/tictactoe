import checkAllEqual from "./checkAllEqual";

export default function checkThreeInAColumn(argArray) {
  //Create a column of items to be checked
  const createColumn = (array) => {
    const column = array.reduce((acc, item, index) => {
      if (index % 3 === 0) {
        return acc.concat(item);
      } else {
        return acc;
      }
    }, []);
    return column;
  };

  //check all columns
  const checkAllColumns = (array) => {
    const newColumn = createColumn(array);
    const columnWon = checkAllEqual(newColumn);
    if (columnWon) return true;

    const remainingColumns = array.slice(1);
    const otherColumnWins =
      remainingColumns.length > 6 ? checkAllColumns(remainingColumns) : false;
    return otherColumnWins;
  };
  const columnWon = checkAllColumns(argArray);
  return columnWon;
}
