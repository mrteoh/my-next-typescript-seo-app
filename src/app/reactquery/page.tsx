// src/app/reactquery/page.tsx
"use client";

import { useQuery } from "@tanstack/react-query";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
}

export default function ReactQueryPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
  console.log('data', data)

  if (isLoading) return <p className="p-4">Loading...</p>;
  if (isError) return <p className="p-4 text-red-500">Error loading data</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">✅ Todos (React Query)</h1>
      <ul className="space-y-2">
        {data?.slice(0, 5).map((todo) => (
          <li
            key={todo.id}
            className="p-2 rounded-lg border shadow-sm bg-white flex justify-between"
          >
            <span>{todo.title}</span>
            <span
              className={`text-sm ${
                todo.completed ? "text-green-600" : "text-orange-500"
              }`}
            >
              {todo.completed ? "Done" : "Pending"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
