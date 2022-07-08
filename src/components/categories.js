import React from 'react';

const Categories = () => {
  const divStyle = {
    width: "80%",
    paddingTop: "100px",
    textAlign: "center",
  }

  const buttonStyle = {
    width: "150px",
    height: "40px",
  }

  return (
    <div style={divStyle}>
      <button
      style={buttonStyle}
      type="button"
      >
      Check Status
      </button>
    </div>
  );
};

export default Categories;
