import React, { useState, useEffect, useReducer } from "react";
import todosReducer from "./reducers/todos";
import "./App.css";
import ToDos from "./components/Todo";
import { Button, Typography } from 'antd';

const { Title } = Typography;

function App() {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [idx, setIdx] = useState(localStorage.getItem("idx"));

  const addToDo = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      title,
      completed,
      idx,
    });
    setTitle("");
    setCompleted(false);
    if (title !== "") {
      setIdx((idx) => +idx + 1);
    }
  };

  const removeToDo = (idx) => {
    dispatch({
      type: "REMOVE_TODO",
      idx,
    });
  };

  const completeToDo = (title, completed, idx) => {
    dispatch({
      type: "COMPLETE_TODO",
      idx,
      title,
      completed,
    });
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos) {
      dispatch({ type: "POPULATE_TODOS", todos });
      if(todos.length === 0) {
          setIdx(0);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("idx", idx);
  }, [todos, idx]);

  function cleanup() {
    dispatch({ type: "CLEANUP"});
    console.log("cleanup");
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div>
      <Title className="centered">ToDo App</Title>
      <ToDos
        todos={todos}
        removeToDo={removeToDo}
        completeToDo={completeToDo}
      />
      
      <form onSubmit={addToDo} className="centered">
        <input autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
        <button>Add ToDo</button>
      </form>
      <Button className="centered cleanup" onClick={() => cleanup()}>Cleanup</Button>
    </div>
  );
}

export default App;
