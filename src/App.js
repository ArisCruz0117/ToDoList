import React, { useState, useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import ToDos from "./components/Todo";
import { Button, Typography } from 'antd';
import populateTodos from "./redux/actions/populateTodos"
import addTodo from "./redux/actions/addTodo"
import removeTodo from "./redux/actions/removeTodo"
import completeToDo from "./redux/actions/completeTodo"

const { Title } = Typography;

function App({todos, addTodo, removeTodo, completeToDo, populateTodos}) {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [idx, setIdx] = useState(localStorage.getItem("idx"));//localStorage.getItem("idx")

  const addElement = (e) => {
    e.preventDefault();

    const todo = {
      title: title,
      idx,
      completed
    }

    addTodo(todo);
    setTitle("");
    setCompleted(false);
    if (title !== "") {
      setIdx((idx) => +idx + 1);
    }
  };

  const removeElement = (idx) => {
    removeTodo(idx);
  };

  const completeElement = (todo) => {
    completeToDo(todo);
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    const i = JSON.parse(localStorage.getItem("idx"));
    if (todos) {
      populateTodos({todos, i});
      if(todos.length === 0) {
        setIdx(0);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("idx", idx);
  }, [todos, idx]);

  function cleanup() {
    console.log("cleanup");
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div>
      <Title className="centered">ToDo App</Title>
      <ToDos
        todos={todos}
        removeToDo={removeElement}
        completeToDo={completeElement}
      />
      
      <form onSubmit={addElement} className="centered">
        <input autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
        <button>Add ToDo</button>
      </form>
      <Button className="centered cleanup" onClick={() => cleanup()}>Cleanup</Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todosReducer.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)), //addTodo
    removeTodo: (idx) => dispatch(removeTodo(idx)), //removeTodo
    completeToDo: (todo) => dispatch(completeToDo(todo)), //completeToDo
    populateTodos: (todos) => dispatch(populateTodos(todos)) //populateTodos
  };
};

// state       ,    actions
const wrapper = connect(mapStateToProps, mapDispatchToProps);
const component = wrapper(App); //which component I'm modifying

export default component;
