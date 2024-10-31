import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const Table = () => {
  const [teacherData, setTeacherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/teachers");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTeacherData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Mã</th>
            <th>Giáo viên</th>
            <th>Trình độ (cao nhất)</th>
            <th>Bộ môn</th>
            <th>Địa chỉ</th>
            <th>TT Công tác</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {teacherData.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>
                <img
                  alt={`${teacher.name} Avatar`}
                  src="https://storage.googleapis.com/a1aa/image/HfZmcgOhYz0gF6Z5f8ajtoRSkTbJ4vIz1Cz0qPVciQffGKxOB.jpg"
                />
                <div>
                  {teacher.name}
                  <br />
                  {teacher.email}
                  <br />
                  {teacher.phone}
                </div>
              </td>
              <td>{teacher.degree}</td>
              <td>N/A</td>
              <td>{teacher.address}</td>
              <td>{teacher.workStatus}</td>
              <td className="status">{teacher.status}</td>
              <td className="action">Chi tiết</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Table;
