"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Link } from "aisolutions-react-components";

const AdminHome = () => {
  const { user } = useUser();

  return (
    <div className="p-5">
      <h1 className="text-lg">Demo App \ Admin</h1>
      {user && (
        <div className="flex gap-5 mt-5">
          <Link href="/" text="Home" variant="secondary" />
          <Link href="/api/auth/me" text="Me" variant="secondary" />
          <Link href="/api/auth/logout" text="Logout" variant="secondary" />
        </div>
      )}
      <hr className="my-10" />
      <div className="mt-10">Super Secure Private Page</div>
    </div>
  );
};

export default AdminHome;
