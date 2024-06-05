import React, { useState } from "react"

interface newProps {
  onAdd: (text: string) => void
}


const AddTodo: React.FC<newProps> = ({ onAdd }) => {
  const [ newTodo, setNewTodo ] = useState('')

  const addTodo = () => {
    if(newTodo.trim()) {
      onAdd(newTodo)
      setNewTodo('')
    }
  }
  
  return (
    <div>
      <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <button onClick={() => addTodo()}>Add</button>
    </div>
  )
}

export default AddTodo