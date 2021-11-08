import React from "react";

import Home from "./pages/Home";
import ShortLink from "./pages/ShortLink";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<ShortLink />} />
      </Routes>
    </>
  );
}

export default App;
