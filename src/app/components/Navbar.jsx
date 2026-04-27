import Link from "next/link";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/auth/signup">SignUp</Link>
      </li>
      <li>
        <Link href="/auth/signin">SignIn</Link>
      </li>
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
