import { useState, useEffect } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    const count = todos.filter(todo => todo.completed).length
    setCompletedCount(count)
  }, [todos])

  const addTodo = () => {
    if(newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
      setNewTodo("")
    }
  }

const toggleTodo = (id) => {
  setTodos(
    todos.map(todo => todo.id === id? {
      ...todo,completed: !todo.completed
    }: todo)
  )
}

const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id))
}

return (
  <div>
    <h1>Todo List</h1>
    <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
    <button onClick={addTodo}>Add Todo</button>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.completed ? "line-through" : "none"}} onClick={() => toggleTodo(todo.id)}>
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
    <div>Completed Tasks: {completedCount}</div>

  </div>
)

}

export default TodoList
