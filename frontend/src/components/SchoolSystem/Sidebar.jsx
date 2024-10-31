import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChalkboardTeacher,
  faUserGraduate,
  faUserTie,
  faDatabase,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <FontAwesomeIcon icon={faHome} /> Thống kê
        </li>
        <li>
          <FontAwesomeIcon icon={faChalkboardTeacher} /> Lớp học
        </li>
        <li>
          <FontAwesomeIcon icon={faUserGraduate} /> Học sinh
        </li>
        <li className="active">
          <FontAwesomeIcon icon={faUserTie} /> Giáo viên
        </li>
        <li>
          <FontAwesomeIcon icon={faDatabase} />
          Dữ liệu
        </li>
        <li>
          <Link to="/vi-tri-cong-tac">
            <FontAwesomeIcon icon={faBriefcase} /> Vị trí công tác
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
