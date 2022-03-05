import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GlobalStyle from "./components/styles/global";

function App() {
  return (
    <>

    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      
    </div>
    </>
  );
}

export default App;
