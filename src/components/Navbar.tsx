/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    navigator.serviceWorker.getRegistrations().then((responses) =>
      responses.forEach((response) =>
        response.update().then((res: any) => {
          console.log(res.active);
          console.log(res.waiting);
        })
      )
    );
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
