import React from "react";

import Home from "./pages/Home";
import ShortLink from "./pages/ShortLink";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="https://bitlyclone.netlify.app/"
          element={<Home />}
        />
        <Route
          exact
          path="https://bitlyclone.netlify.app/:id"
          element={<ShortLink />}
        />
      </Routes>
    </>
  );
}

export default App;
