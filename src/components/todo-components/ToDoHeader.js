import "./ToDoHeader.css";

const ToDoHeader = ({ title, onAdd }) => {
  return (
    <header>
      <div className="title">{title}</div>
      <button className="button" onClick={onAdd}>
        add new task
      </button>
    </header>
  );
};

export default ToDoHeader;
