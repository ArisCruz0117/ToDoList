export const type = "ADD_TODO";

const ADD_TODO = (todo) => {
  return {
    type,
    payload: todo,
  };
};

export default ADD_TODO;
