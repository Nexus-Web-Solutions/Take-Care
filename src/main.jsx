import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <Navbar />
      <About /> 
      <Footer />
   </StrictMode>
);
