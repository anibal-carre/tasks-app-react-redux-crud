import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="w-full h-12 flex items-center justify-between px-5 bg-zinc-800 text-white">
      <div className="font-bold">Tasks App</div>
      <nav>
        <ul className="flex gap-5 font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
