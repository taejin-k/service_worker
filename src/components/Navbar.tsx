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

  const checkUpdate = history.listen(() => {
    if (!navigator.serviceWorker) return false;

    navigator.serviceWorker.getRegistrations().then((responses) =>
      responses.forEach((responses) => {
        responses.update().then(() => {
          if (responses.waiting) {
            alert("버전이 업데이트 되었습니다.");
            applyUpdate();
          }
        });
      })
    );
  });

  useEffect(() => {
    if (!history) return;

    checkUpdate();
    return () => {
      checkUpdate();
    };
  }, [history]);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
