import React from "react"
interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}
const TodoItem: React.FC<TodoItemProps> = ({
  id, text, completed, onToggle, onDelete
}) => {
  return (
    <li>
      <span style={{ textDecoration: completed? "line-through" : "none"}}
      onClick={() => onToggle(id)}>{text}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  )
}

export default TodoItem