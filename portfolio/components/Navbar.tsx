import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <div>
        Manvendra Singh
      </div>

      <div>
        <Link href="/posts">Posts</Link>
        <Link href="/talks">Talks</Link>
        <Link href="/videos">Videos</Link>
        <Link href="/travel">Travel</Link>
        <Link href="/about">About</Link>
      </div>


      <div>
        <Link href="https://github.com/manvnedra1406">Github</Link>
        <Link href="https://www.linkedin.com/in/manvendra-singh%F0%9F%A5%91-509836222/">Linkedin</Link>
        <Link href="https://x.com/manvnedra1406">X</Link>
        <Link href="/theme">Theme</Link>
      </div>
    </nav>
  );
}