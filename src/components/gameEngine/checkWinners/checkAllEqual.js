export default function checkAllEqual(array) {
  const compareItem = array[0];
  const win = array.reduce(
    (acc, item) => acc && item === compareItem && item !== "?",
    true
  );
  return win;
}
