import { create } from "zustand";
import { initialItems } from "../lib/constants";

create((set) => ({
  items: JSON.parse(localStorage.getItem("items")) || initialItems,
  handleRemoveAllItems: () => {
    set(() => ({ items: [] }));
  },
  handleResetItems: () => {
    set(() => ({ items: initialItems }));
  },
  handleMarkAllItemsAsComplete: () => {
    set((state) => ({
      items: state.items.map((item) => ({ ...item, packed: true })),
    }));
  },
  handleMarkAllItemsAsIncomplete: () => {
    set((state) => ({
      items: state.items.map((item) => ({ ...item, packed: false })),
    }));
  },
}));
