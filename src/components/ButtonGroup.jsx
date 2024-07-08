import Button from "./Button";

import useItemContext from "../hooks/useItemContext";
// import { secondaryButtons } from "../lib/constants";

export default function ButtonGroup() {
  const {
    handleMarkAllItemsAsComplete,
    handleMarkAllItemsAsIncomplete,
    handleResetItems,
    handleRemoveAllItems,
  } = useItemContext();

  const secondaryButtons = [
    {
      text: "Mark all items as complete",
      onClick: handleMarkAllItemsAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: handleMarkAllItemsAsIncomplete,
    },
    {
      text: "Reset all  items",
      onClick: handleResetItems,
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => (
        <Button
          key={text + onClick.toString()}
          buttonType="secondary"
          text={text}
          onClick={onClick}
        />
      ))}
    </section>
  );
}
