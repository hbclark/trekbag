import useItemContext from "../hooks/useItemContext";

export default function Counter() {
  const { packedNumberOfItems, totalNumberOfItems } = useItemContext();
  return (
    <p>
      <strong>{packedNumberOfItems}</strong> / {totalNumberOfItems} items packed
    </p>
  );
}
