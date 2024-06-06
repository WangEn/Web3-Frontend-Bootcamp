import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import AddTodo from "./components/AddToDo";
import TodoList from "./components/TodoList";
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos")!)
      : []
  );

  useEffect(() => {
    console.log(todos);
    console.log(localStorage.getItem("todos"));
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Header />
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </>
  );
}

export default App;
