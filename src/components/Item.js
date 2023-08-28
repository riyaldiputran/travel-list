export function Item({ item, onDeleteItems, onPackedItems }) {
  return (
    <>
      <li style={item.packed ? { textDecoration: "line-through" } : {}}>
        <input
          type="checkbox"
          checked={item.packed}
          value={item.packed}
          onChange={() => onPackedItems(item.id)}
        ></input>
        <span>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItems(item.id)}>❌</button>
      </li>
    </>
  );
}
