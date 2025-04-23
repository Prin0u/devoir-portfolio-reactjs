import React from "react";

const Separator = ({
  width = "100%",
  color = "#007bff",
  height = "5px",
  margin = "1rem 0 2rem 0",
}) => {
  const style = {
    width,
    backgroundColor: color,
    height,
    border: "none",
    opacity: 1,
    margin,
  };

  return <hr className="separator" style={style} />;
};

export default Separator;
