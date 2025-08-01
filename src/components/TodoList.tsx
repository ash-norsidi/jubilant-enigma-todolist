import TodoItem from './TodoItem';

type TodoListProps = {
  todos: string[];
};

function TodoList({ todos }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
