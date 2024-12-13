"use client";

import { SimpleSearchForm } from "aisolutions-react-components";

export default function Home() {
  const onSubmit = (data: { query: string }) => {
    console.log("Search form submitted", data.query);
  };
  return (
    <div>
      <h1>Demo Home</h1>

      <div className="flex gap-2">
        <a href="/api/auth/login">Login</a>
        <a href="/api/auth/me">API/me</a>
        <a href="/api/auth/logout">Logout</a>
        <a href="/admin">Admin</a>
      </div>

      <hr className="my-5" />

      <h2>Search component</h2>
      <SimpleSearchForm className="mt-4" onSubmit={onSubmit} />
    </div>
  );
}
