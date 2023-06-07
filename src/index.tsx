import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import App from "./App";

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
    console.log("onUpdate");
  },
  onSuccess: () => {
    console.log("onSuccess");
  },
});
