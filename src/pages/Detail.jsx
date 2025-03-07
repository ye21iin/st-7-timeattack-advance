import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { todoApi } from "../api/todos";
import { useQuery } from "@tanstack/react-query";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchDetail = async () => {
    const response = await todoApi(`/todos/${id}`);
    return response.data;
  };

  const { data, isPending, isError } = useQuery({
    queryKey: ["todos/id"],
    queryFn: () => fetchDetail(id),
  });

  if (isPending) return <>Loading...</>;
  if (isError) return <>Error...</>;

  return (
    <div>
      <button onClick={() => navigate("/")}>홈으로 이동</button>
      <p>제목: {data.title}</p>
      <p>내용: {data.contents}</p>
      <p>작성일자: {new Date(data.createdAt).toDateString()}</p>
    </div>
  );
}
