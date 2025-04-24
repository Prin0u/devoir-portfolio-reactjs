import React from "react";

const Separator = ({ variant = "default" }) => {
  return <hr className={`separator separator--${variant}`} />;
};

export default Separator;
