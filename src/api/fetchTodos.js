import { todoApi } from "./todos";

export const fetchData = async () => {
  const response = await todoApi.get("/todos");
  return response.data;
};

export const postTodo = async (newTodo) =>
  await todoApi.post("/todos", newTodo);

export const fetchDetail = async (id) => {
  const response = await todoApi(`/todos/${id}`);
  return response.data;
};
