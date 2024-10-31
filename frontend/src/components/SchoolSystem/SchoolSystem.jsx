import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./SchoolSystem.css";

const SchoolSystem = () => {
  return (
    <div className="school-system">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};

export default SchoolSystem;
