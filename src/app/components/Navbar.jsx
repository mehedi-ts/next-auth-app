"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const Navbar = () => {
  const { data, isPending } = authClient.useSession();
  console.log(data);
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      {data ? (
        <div>
          <p>welcome :{data.user.name}</p>
          <p
            onClick={async () => await authClient.signOut()}
            className=" underline cursor-pointer"
          >
            Signout
          </p>
        </div>
      ) : (
        <li>
          <Link href="/auth/signin">SignIn</Link>
        </li>
      )}
    </>
  );
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <p className="font-bold">ACME</p>
        </div>
        <ul className="flex items-center gap-4">{links}</ul>
      </header>
    </nav>
  );
};

export default Navbar;
