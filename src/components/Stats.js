export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numNotPacked = items.filter((item) => !item.packed).length;
  const persentagePacked =
    numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {persentagePacked === 100 ? (
        <p> You are ready to go! you have packed all of your things!</p>
      ) : (
        <em>
          You have {numItems} items on the list, you already packed {numPacked}{" "}
          ({persentagePacked}% ) ,please make sure pack the other {numNotPacked}
        </em>
      )}
    </footer>
  );
}
