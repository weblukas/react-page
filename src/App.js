import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Store from "./pages/Store";
import GlobalStyle from "./components/styles/globalStyles";

function App() {
  return (
    <>

    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      
    </div>
    </>
  );
}

export default App;
