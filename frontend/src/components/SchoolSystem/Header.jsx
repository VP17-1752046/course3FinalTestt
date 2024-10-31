import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <span>School System</span>
      </div>
      <div className="date-time">31/10/2024 11:23:02</div>
      <div className="user-info">
        <img
          alt="Admin Avatar"
          src="https://storage.googleapis.com/a1aa/image/36GGY8xeH33LeEsGcV9nkYQzmgnDLi8OfOzecNuPU0GsGKxOB.jpg"
        />
        <div>
          <div className="name">Admin</div>
          <div className="role">ADMIN</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
