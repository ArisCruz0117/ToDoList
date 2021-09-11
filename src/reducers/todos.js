const todosReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_TODOS":
      return action.todos;
    case "ADD_TODO":
      if(action.title === "") return state;
      return [...state, { title: action.title, completed: action.completed, idx: action.idx }];
    case "REMOVE_TODO": {
      let todos = [...state];
      todos = todos.filter((todo) => todo.idx !== action.idx);
      return todos;
    }
    case "COMPLETE_TODO": {
      const getIndex = (e) => e.idx === action.idx;
      const i = (state.findIndex(getIndex));
      let todos = [...state];
      todos.splice(i, 1, { title: action.title, completed: !action.completed, idx: action.idx });
      return todos;
    }
    case "CLEANUP": 
    return 0;
    default:
      return state;
  }
};

export default todosReducer;