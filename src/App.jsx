import React, { useState } from "react";
import Home from "./Pages/Home";
import Result from "./Pages/Result";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)} className="menuBtn">
        {open ? (
          <img src={require("./Assets/Close.png")} />
        ) : (
          <img src={require("./Assets/Menu.png")} />
        )}
      </button>
      <Navbar open={open} />
      <Home />
      <Result />
      <About />
      <Footer />
    </>
  );
}
