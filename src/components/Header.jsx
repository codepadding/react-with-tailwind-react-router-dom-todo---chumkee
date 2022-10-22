import React from "react";
import {
  Route,
  Link,
  Outlet
} from "react-router-dom";
const Header = () => {
  
  return (
    <div className="h-20 bg-gray-900 w-full flex justify-center items-center gap-3 text-[30px] font-bold">
      <Link to="/" className="cursor-pointer hover:underline hover:text-purple-700 hover:underline-offset-4">Home</Link>
      <Link to="todo" className="cursor-pointer hover:underline hover:text-yellow-500 hover:underline-offset-4">Todo List</Link>
      <Link to={"contact"} className="cursor-pointer hover:text-blue-500">Contact</Link>
    </div>
  );
};

export default Header;
