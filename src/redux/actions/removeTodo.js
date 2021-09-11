export const type = "REMOVE_TODO";

const REMOVE_TODO = (idx) => {
  return {
    type,
    payload: idx,
  };
};

export default REMOVE_TODO;

