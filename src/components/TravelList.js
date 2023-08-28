import { useState } from "react";
import { Item } from "./Item";

export function TravelList({
  items,
  onDeleteItems,
  onPackedItems,
  onClearItems,
}) {
  const [sort, setSort] = useState("input");
  let sortedItems;
  if (sort === "input") sortedItems = items;
  if (sort === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sort === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onPackedItems={onPackedItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          <option value="input">Sort by Input Order</option>
          <option value="description"> Sort by Description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );
}
