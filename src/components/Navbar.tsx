/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <span> |</span>
      <Link to="/about">About</Link>
    </nav>
  );
};
