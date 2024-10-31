import React from "react";

const Pagination = () => {
  return (
    <div className="pagination">
      <span>Hiện 1-3 trong 3</span>
      <div className="pages">
        <span className="active">1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <span className="per-page">Số bản ghi mỗi trang: 10</span>
    </div>
  );
};

export default Pagination;
