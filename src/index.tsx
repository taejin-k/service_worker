import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppWrapper } from "./AppWrapper";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppWrapper />
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
