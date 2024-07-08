import { useContext, useRef, useState } from "react";
import Button from "./Button";
import { ItemsContext } from "../contexts/ItemsContextProvider";

export default function AddItemForm() {
  const [item, setItem] = useState("");
  const ref = useRef();
  const { handleAddItem: onAddItem } = useContext(ItemsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    //basic validation
    if (!item) {
      alert("Please enter an item name");
      ref.current.focus();
      return;
    }
    const newItem = { id: new Date().getTime(), name: item, packed: false };
    onAddItem(newItem);
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item-name">Add an item</label>
      <input
        id="item-name"
        ref={ref}
        type="text"
        onChange={(e) => setItem(e.target.value)}
        value={item}
        placeholder="E.g. toothbrush"
        autoFocus
      />
      <Button text={"Add to list"} />
    </form>
  );
}
