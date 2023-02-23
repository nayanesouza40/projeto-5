import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import App from "./App";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Perfil from "./pages/Perfil";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/registro",
        element: <Cadastro />,
      },
      {
        path: "/user/:username",
        element: <Perfil />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
