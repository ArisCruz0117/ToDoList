export const type = "POPULATE_TODOS";

const POPULATE_TODOS = (todos) => {
  return {
    type,
    payload: todos,
  };
};

export default POPULATE_TODOS;
