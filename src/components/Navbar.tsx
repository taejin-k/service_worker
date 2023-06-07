/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    navigator.serviceWorker
      .getRegistrations()
      .then((responses) => responses.forEach((response) => response.update()));
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/about">About</Link>
    </nav>
  );
};
