import { useRef } from "react";
import "./pagination.css";

export const Pagination = ({ total, selected, onPageChange }) => {
  let str = [];
  for (let i = 1; i <= total; i++) {
    str.push(i);
  }

  return (
    <div className="pageContainer">
      <div>Prev</div>
      {str.map((el) => (
        <div>{el}</div>
      ))}

      <div>Next</div>
    </div>
  );
};
