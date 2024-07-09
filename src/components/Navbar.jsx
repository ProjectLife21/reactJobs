const Navbar = () => {
  return (
    <nav className="flex justify-center bg-blue-700">
      <div className="w-full p-3 flex justify-between max-w-[1200px]">
        <h1 className="text-white font-bold text-2xl">React Jobs</h1>
        <ul className="flex justify-center items-center gap-4 font-medium text-white">
          <li className="p-1 rounded-md hover:bg-black ease-in duration-200 cursor-pointer">
            <a href="#">Home</a>
          </li>
          <li className="p-1 rounded-md hover:bg-black ease-in duration-200 cursor-pointer">
            <a href="#">Jobs</a>
          </li>
          <li className="p-1 rounded-md hover:bg-black ease-in duration-200 cursor-pointer">
            <a href="#">Add Job</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
