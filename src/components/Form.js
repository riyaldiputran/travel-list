import { useState } from "react";
import { InitialItems } from "./App";

export function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [lastId, setLastId] = useState(InitialItems.length);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return alert("Data cannot be empty");
    const newItem = {
      id: lastId + 1,
      description: description,
      quantity: quantity,
      packed: false,
    };

    onAddItems(newItem);

    setDescription("");
    setLastId(lastId + 1);
    setQuantity(1);
  }
  function handleDescriptionChange(e) {
    if (!isNaN(e.target.value)) {
      alert("Please Input Text!");
      return;
    }
    setDescription(e.target.value);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        placeholder="Things"
        value={description}
        onChange={handleDescriptionChange}
      ></input>
      <button>Add</button>
    </form>
  );
}
