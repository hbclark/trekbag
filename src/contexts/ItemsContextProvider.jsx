import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || initialItems;
  });

  const handleAddItem = (newItem) => {
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetItems = () => {
    setItems(initialItems);
  };

  const handleMarkAllItemsAsComplete = () => {
    const updatedItems = items.map((item) => ({ ...item, packed: true }));
    setItems(updatedItems);
  };

  const handleMarkAllItemsAsIncomplete = () => {
    const updatedItems = items.map((item) => ({ ...item, packed: false }));

    setItems(updatedItems);
  };

  const totalNumberOfItems = items.length;
  const packedNumberOfItems = items.filter((item) => item.packed).length;

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        setItems,
        handleAddItem,
        handleRemoveAllItems,
        handleResetItems,
        handleMarkAllItemsAsComplete,
        handleMarkAllItemsAsIncomplete,
        totalNumberOfItems,
        packedNumberOfItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
