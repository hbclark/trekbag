export default function Button({ buttonType, text, onClick }) {
  return (
    <button
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
