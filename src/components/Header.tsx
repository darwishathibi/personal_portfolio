export default function Header() {
  return (
    <nav className="fixed top-0 backdrop-blur-sm w-full">
      <div
        className="flex justify-center items-center h-16 bg-transparent text-lg"
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
