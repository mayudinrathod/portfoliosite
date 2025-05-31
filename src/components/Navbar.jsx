export default function Navbar() {
    return (
      <nav className="flex justify-between px-6 py-4 w-full z-50">
        <h1 className="text-2xl font-bold text-[#0f172a] dark:text-white">Mayudin Rathod</h1>
        <ul className="flex space-x-6 text-[#0f172a] dark:text-white">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
  