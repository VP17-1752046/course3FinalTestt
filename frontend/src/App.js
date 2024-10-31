import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SchoolSystem from "./components/SchoolSystem/SchoolSystem";
import PositionPage from "./components/SchoolSystem/PositionPage";
import Sidebar from "./components/SchoolSystem/Sidebar";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<SchoolSystem />} />
          <Route path="/vi-tri-cong-tac" element={<PositionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
