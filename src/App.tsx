import { useState } from 'react';
import { TodoInput, TodoList } from './components';

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
