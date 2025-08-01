import { useState } from 'react';
import { TodoInput, TodoList } from './components';
import { Todo } from "./types/todo";

function App() {
  // type Todo = {
  //   text: string;
  //   done: boolean;
  // };

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos([...todos, { text: newTodo, done: false }]);
  };

  const deleteTodo = (indexToRemove: number) => {
    setTodos(todos.filter((_, i) => i !== indexToRemove));
  };

  const toggleTodo = (indexToToggle: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === indexToToggle ? { ...todo, done: !todo.done } : todo
      )
    );
    console.log(`Set ToDo complete at index: ${indexToToggle}`);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onToggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
