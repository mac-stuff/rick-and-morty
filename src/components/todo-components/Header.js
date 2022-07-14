import "./Header.css";

const Header = ({ title, onAdd }) => {
  return (
    <header>
      <h3 className="title">{title}</h3>
      <button className="button" onClick={onAdd}>
        add new task
      </button>
    </header>
  );
};

export default Header;
