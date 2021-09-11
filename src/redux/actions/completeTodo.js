export const type = "COMPLETE_TODO";

const COMPLETE_TODO = (todo) => {
  return {
    type,
    payload: todo,
  };
};

export default COMPLETE_TODO;
