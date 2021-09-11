/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Todo.css"
import 'antd/dist/antd.css';
import { List } from "antd";

const ToDo = ({ todos, removeToDo, completeToDo }) => {
  return (
    <List
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item
          actions={[<a onClick={() => removeToDo(todo.idx)}>Delete</a>]}>
            <List.Item.Meta
              className="listItem"
              avatar={todo.completed ? "✅" : "❌"}
              title={<p>{todo.title}</p>}
              onClick={() => completeToDo({title: todo.title, completed: todo.completed, idx: todo.idx})}
            />
          </List.Item>
        )}
      />
  );
};

export default ToDo;