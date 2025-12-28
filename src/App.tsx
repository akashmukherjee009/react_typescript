import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import type { Todo } from "./models/todo";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taksify</span>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
