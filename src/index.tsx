import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register({
  onUpdate: () => {
    alert("새로운 버전이 배포되었습니다.");
    navigator.serviceWorker.getRegistrations().then((responses) =>
      responses.forEach((response) => {
        response.waiting?.postMessage({ type: "SKIP_WAITING" });
      })
    );
  },
  onSuccess: () => console.log("onSuccess"),
});
