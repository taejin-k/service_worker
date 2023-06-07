/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  // const applyUpdate = () => {
  //   navigator.serviceWorker.getRegistrations().then((responses) =>
  //     responses.forEach((response) => {
  //       response.waiting?.postMessage({ type: "SKIP_WAITING" });
  //     })
  //   );
  // };

  useEffect(() => {
    navigator.serviceWorker.getRegistrations().then((responses) =>
      responses.forEach((response) => {
        console.log(response);
        response.update().then((res) => {
          console.log(response.waiting);
          console.log(res);
        });
      })
    );
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
