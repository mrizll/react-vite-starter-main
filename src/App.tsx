import { BrowserRouter, Routes, Route } from "react-router-dom";

import productsData from "./products.json";

// pages
import Home from "pages/home";
import About from "pages/about";

const RootApp = () => {
  // Comment
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootApp;
