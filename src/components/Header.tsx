export default function Header() {
  return (
    <nav>
      <div
        className="flex justify-center items-center h-16 bg-transparent relative md:bg-fixed md:w-screen text-lg"
        role="navigation"
      >
        <a href="/about" className="px-20">
          photography
        </a>
        <a href="/projects" className="px-20">
          projects
        </a>
        <a href="/contact" className="px-20">
          contact
        </a>
      </div>
    </nav>
  );
}
