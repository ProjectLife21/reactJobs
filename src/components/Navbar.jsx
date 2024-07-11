import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActiveNavLinks = (isActive) => {
    return isActive ? "bg-black" : "bg-transparent";
  };

  return (
    <nav className="flex justify-center bg-blue-700">
      <div className="w-full p-3 flex justify-between max-w-[1200px]">
        <h1 className="text-white font-bold text-2xl">React Jobs</h1>
        <ul className="flex justify-center items-center gap-4 font-medium text-white">
          <li className="p-1 rounded-md hover:bg-black ease-in duration-200 cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) => setActiveNavLinks(isActive)}
            >
              Home
            </NavLink>
          </li>
          <li className="p-1 rounded-md hover:bg-black ease-in duration-200 cursor-pointer">
            <NavLink
              to="/jobs"
              className={({ isActive }) => setActiveNavLinks(isActive)}
            >
              Jobs
            </NavLink>
          </li>
          <li className="p-1 rounded-md hover:bg-black ease-in duration-200 cursor-pointer">
            <NavLink
              to="/add-job"
              className={({ isActive }) => setActiveNavLinks(isActive)}
            >
              Add Job
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
