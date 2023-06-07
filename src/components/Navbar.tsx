/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();

  const applyUpdate = () => {
    navigator.serviceWorker.getRegistrations().then((responses) =>
      responses.forEach((response) => {
        response.waiting?.postMessage({ type: "SKIP_WAITING" });
      })
    );
  };

  useEffect(() => {
    navigator.serviceWorker.getRegistrations().then((responses) =>
      responses.forEach((response) => {
        response.update().then(() => {
          if (response.waiting) {
            if (window.confirm("새로운 버전이 배포되었습니다.")) {
              applyUpdate();
            }
          }
        });
      })
    );
  }, [history.location.pathname]);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
