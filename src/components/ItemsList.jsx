import Select from "react-select";
import EmptyView from "./EmptyView";

import useItemContext from "../hooks/useItemContext";
import { useMemo, useState } from "react";

const options = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

export default function ItemsList() {
  const [sortBy, setSortBy] = useState("default");

  const { items, setItems } = useItemContext();
  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        } else if (sortBy === "unpacked") {
          return a.packed - b.packed;
        } else {
          return 0;
        }
      }),
    [items, sortBy]
  );

  return (
    <ul>
      {items.length === 0 && <EmptyView />}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={options[0]}
            options={options}
          />
        </section>
      ) : (
        <EmptyView />
      )}
      {sortedItems?.map((item) => (
        <Item key={item.id} item={item} setItems={setItems} />
      ))}
    </ul>
  );
}

function Item({ item, setItems }) {
  function handleClick(e) {
    const newItem = { ...item, packed: e.target.checked };
    setItems((prevItems) => {
      const index = prevItems.findIndex((i) => i.id === item.id);
      const newItems = [...prevItems];
      newItems[index] = newItem;
      return newItems;
    });
  }

  function handleDelete() {
    setItems((prevItems) => {
      return prevItems.filter((i) => i.id !== item.id);
    });
  }

  return (
    <li className="item">
      <label>
        <input checked={item.packed} type="checkbox" onChange={handleClick} />
        {item.name}
      </label>

      <button onClick={handleDelete}>❌</button>
    </li>
  );
}
