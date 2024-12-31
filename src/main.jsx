import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Homepage from "./pages/Homepage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Homepage />,
   },
   {
      path: "/about-us",
      element: <About />,
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
   </StrictMode>
);
