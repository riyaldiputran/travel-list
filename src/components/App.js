import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { TravelList } from "./TravelList";
import { Stats } from "./Stats";

export const InitialItems = [
  {
    id: 1,
    description: "Passports",
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: "Socks",
    quantity: 12,
    packed: false,
  },
  {
    id: 3,
    description: "Bag",
    quantity: 12,
    packed: true,
  },
];
function App() {
  const [items, setItems] = useState(InitialItems);
  function handleAddItems(item) {
    setItems((currItems) => [...currItems, item]);
  }
  function handleDeleteItems(id) {
    setItems((currItems) => currItems.filter((item) => item.id !== id));
  }
  function handlePackedItems(id) {
    setItems((currItems) =>
      currItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure want to delete these items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form items={items} onAddItems={handleAddItems} />
      <TravelList
        items={items}
        onDeleteItems={handleDeleteItems}
        onPackedItems={handlePackedItems}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
