import { useState } from "react";
import { addTodo } from "./features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  return (
    <div className="app">
      {todos.map((todo) => (
        <div key={todo.id} className="flex">
          <p>{todo.content}</p>
          <p>{todo.done}</p>
        </div>
      ))}
      <div>
        <input
          className="border-4 border-black"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addTodo(input));
            setInput("");
          }}
        >
          add todo
        </button>
      </div>
    </div>
  );
};

export default App;
