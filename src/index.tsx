import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "@/globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "@/pages/Home.tsx";
import { ErrorBoundary } from "./components/ErrorBoundary.tsx";
import { SingleImage } from "./pages/SingleImage.tsx";
import { FormPage } from "@/pages/Form.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "images/:id",
        element: <SingleImage />,
      },
      {
        path: "form",
        element: <FormPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
