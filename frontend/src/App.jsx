import React from "react";
import Charts from "./pages/Charts";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Charts />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
