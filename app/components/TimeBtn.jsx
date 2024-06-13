import React from "react";

const timeBtn = ({ name, onClick }) => {
  return (
    <button className="btn btn-outline btn-secondary" onClick={onClick}>
      {name}
    </button>
  );
};

export default timeBtn;
