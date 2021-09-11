import { type as POPULATE_TODOS } from "../actions/populateTodos";
import { type as ADD_TODO } from "../actions/addTodo";
import { type as REMOVE_TODO } from "../actions/removeTodo";
import { type as COMPLETE_TODO } from "../actions/completeTodo";

const defaultState = {
  todos: [],
  idx: 0,
};

function reducer(state = defaultState, { type, payload } /*action*/) {
  switch (type) {
    case POPULATE_TODOS: {
      const newState = { idx: payload.i, todos: payload.todos };
      return newState;
    }

    case ADD_TODO: {
      if (payload.title === "") return state;
      const newState = {
        idx: payload.idx,
        todos: [
          ...state.todos,
          {
            title: payload.title,
            completed: payload.completed,
            idx: payload.idx,
          },
        ],
      };
      return newState;
    }

    case REMOVE_TODO: {
      let todos = [...state.todos];
      todos = todos.filter((todo) => todo.idx !== payload);
      const newState = { ...state, todos: todos };
      return newState;
    }

    case COMPLETE_TODO: {
      const getIndex = (e) => e.idx === payload.idx;
      const i = state.todos.findIndex(getIndex);
      let todos = [...state.todos];
      todos.splice(i, 1, {
        title: payload.title,
        completed: !payload.completed,
        idx: payload.idx,
      });
      const newState = { ...state, todos: todos };
      return newState;
    }

    default:
      return state;
  }
}

export default reducer;
