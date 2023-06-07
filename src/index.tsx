import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const skipWaiting = () => {
  navigator.serviceWorker.getRegistrations().then((responses) =>
    responses.forEach((response) => {
      response.waiting?.postMessage({ type: "SKIP_WAITING" });
    })
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register({
  onUpdate: () => skipWaiting(),
  onSuccess: () => skipWaiting(),
});
