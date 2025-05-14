import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./route/Routers.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
