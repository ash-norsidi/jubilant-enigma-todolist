import TodoItem from './TodoItem';
import { Todo } from "../types/todo";

type TodoListProps = {
  todos: Todo[];
  onDelete: (index: number) => void;
  onToggleTodo: (index: number) => void;
};

function TodoList({ todos, onDelete, onToggleTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          text={todo.text}
          done={todo.done}
          onDelete={() => onDelete(index)}
          onToggle={() => onToggleTodo(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
