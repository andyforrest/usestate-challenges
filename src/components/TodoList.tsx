import { useState } from "react";

let nextId = 0;

function TodoList() {
  const [todos, setTodos] = useState<{ id: number; title: string }[]>([]);
  const [title, setTitle] = useState("");
  function addTodo(title: string) {
    setTodos([...todos, { id: nextId++, title: title }]);
    setTitle("");
  }
  function deleteTodo(id: number) {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
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
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
