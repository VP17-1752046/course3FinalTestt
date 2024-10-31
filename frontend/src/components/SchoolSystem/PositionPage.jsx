import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSyncAlt,
  faCog,
  faHome,
  faChalkboardTeacher,
  faUserGraduate,
  faUserTie,
  faDatabase,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import "./PositionPage.css";

const PositionPage = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/positions");
        if (!response.ok) {
          throw new Error("Failed to fetch positions");
        }
        const data = await response.json();
        setPositions(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  return (
    <div>
      <div className="header">
        <div className="logo">
          <span>School System</span>
        </div>
        <div className="date-time">{new Date().toLocaleString()}</div>
        <div className="user-info">
          <span className="user-name">Admin</span>
          <span className="user-role">ADMIN</span>
        </div>
      </div>
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
          <li>
            <FontAwesomeIcon icon={faUserTie} /> Giáo viên
          </li>
          <li className="active">
            <FontAwesomeIcon icon={faDatabase} /> Dữ liệu
          </li>
          <li className="active">
            <FontAwesomeIcon icon={faBriefcase} /> Vị trí công tác
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="title">Dữ liệu / Vị trí công tác</div>
        <div className="table-container">
          <div className="actions">
            <button>
              <FontAwesomeIcon icon={faPlus} /> Tạo
            </button>
            <button>
              <FontAwesomeIcon icon={faSyncAlt} /> Làm mới
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã</th>
                <th>Tên</th>
                <th>Trạng thái</th>
                <th>Mô tả</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6">Loading...</td>
                </tr>
              ) : (
                positions.map((item) => (
                  <tr key={item._id}>
                    <td>{item.index}</td>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>
                      <span className="status">{item.status}</span>
                    </td>
                    <td>{item.desc}</td>
                    <td>
                      <FontAwesomeIcon icon={faCog} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PositionPage;
