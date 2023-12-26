import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  function addTodo(title: string) {
    setTodos([...todos, title]);
    setTitle("");
  }
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => addTodo(title)}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
