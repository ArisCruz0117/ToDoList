import { createStore, combineReducers } from "redux";
import todosReducer from "./reducers/todos";

const reducer = combineReducers({
  todosReducer
});

const store = createStore(reducer);

export default store;
