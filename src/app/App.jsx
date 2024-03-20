import { useEffect, useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../features/todo/todoApi";

const App = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todoReducer.todos);
  const isLoading = useSelector((state) => state.todoReducer.isLoading);
  const error = useSelector((state) => state.todoReducer.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="app flex justify-center items-center flex-col gap-10 h-screen">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex flex-col justify-center items-center"
        >
          <p>{"user: " + todo.userId}</p>
          <p>{"title: " + todo.title}</p>
          <p>{"todo: " + todo.completed}</p>
        </div>
      ))}
      <div className="flex flex-col justify-center items-center">
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
