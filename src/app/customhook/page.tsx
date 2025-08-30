"use client";


  import useFetch from "./useFetch";

  export default function TodoList() {
    const { data: todos, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>❌ Error: {error}</p>;

    return (
      <ul>
        {todos?.slice(0, 10).map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    );
  }
