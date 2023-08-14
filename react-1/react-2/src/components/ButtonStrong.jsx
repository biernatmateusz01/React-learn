export function ButtonStrong({ children, onClick, onMouseEnter }) {
  return (
    <button>
      <strong onClick={onClick} onMouseEnter={onMouseEnter}>
        {children}
      </strong>
    </button>
  );
}
