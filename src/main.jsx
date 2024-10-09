import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import Index from "./pages";
import StoreNav from "./marketplace/storeNav";
import Store from "./pages/store";
import ProductList from "./marketplace/ProductList";
import Shoes from "./marketplace/Categories/Shoes";
import Sweaters from "./marketplace/Categories/Sweaters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/stats",
    element: <StoreNav />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/sweaters",
    element: <Sweaters />,
  },
  {
    path: "/shoes",
    element: <Shoes />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
