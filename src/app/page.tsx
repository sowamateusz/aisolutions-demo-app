"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Link, SimpleSearchForm } from "aisolutions-react-components";

export default function Home() {
  const { user } = useUser();
  const onSubmit = (data: { query: string }) => {
    alert("Search form submitted: " + data.query);
  };
  return (
    <div className="p-5">
      <h1 className="text-lg">Demo App</h1>
      <div className="flex gap-5 mt-5">
        {!user && <Link href="/api/auth/login" text="Login" />}
        {user && (
          <>
            <Link href="/admin" text="Admin" />
            <Link href="/api/auth/me" text="Me" variant="secondary" />
            <Link href="/api/auth/logout" text="Logout" variant="secondary" />
          </>
        )}
      </div>
      <hr className="my-10" />
      <div>
        <h2 className="text-md mb-5">SimpleSearchForm Component</h2>
        <SimpleSearchForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}
