type TodoItemProps = {
  text: string;
  done: boolean;
  onDelete: () => void;
  onToggle: () => void;
};

function TodoItem({ text, done, onDelete, onToggle }: TodoItemProps) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={done} onChange={onToggle} />
        <span style={{ textDecoration: done ? "line-through" : "none" }}>
          {text}
        </span>
      </label>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
