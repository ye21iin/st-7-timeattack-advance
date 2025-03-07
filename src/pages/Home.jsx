import { todoApi } from "../api/todos";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchData,
  });

  if (isPending) return <>Loading...</>;
  if (isError) return <>Error...</>;

  return (
    <>
      <h2>서버통신 투두리스트 by useState</h2>
      <TodoForm />
      <TodoList todos={data} />
    </>
  );
}

const fetchData = async () => {
  const response = await todoApi.get("/todos");
  return response.data;
};
