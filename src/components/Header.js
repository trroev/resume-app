import React from "react";
import { BsBriefcase } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <BsBriefcase
        style={{
          fill: "#d67215",
          marginRight: "0.75rem",
          fontSize: "calc(3vw + 2rem)",
        }}
      />
      <div className="title">
        RESUME<span className="builder">BUILDER</span>
      </div>
    </div>
  );
};

export default Header;
