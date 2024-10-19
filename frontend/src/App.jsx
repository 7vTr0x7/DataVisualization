import React from "react";
import Charts from "./pages/Charts";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Charts />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
