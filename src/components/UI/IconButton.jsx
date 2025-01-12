function IconButton({ onClick, children }) {
  return (
    <button onClick={onClick} className="icon-button">
      {children}
    </button>
  );
}

export default IconButton;
