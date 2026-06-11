function Sidebar({ items, activeItem, onSelect }) {
  return (
    <nav className="sidebar-list">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          className={`sidebar-item ${item === activeItem ? 'active' : ''}`}
          onClick={() => onSelect(item)}
        >
          {item}
        </button>
      ))}
    </nav>
  )
}

export default Sidebar;
