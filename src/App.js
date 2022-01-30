import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GlobalStyles from "./components/styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
