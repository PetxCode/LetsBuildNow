import React from "react";
import { FacebookOutlined } from "@ant-design/icons";

const HeaderLeft = ({ icons, clr, text }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          fontSize: "30px",
          color: clr,
          backgroundColor: "#F0F2F5",
          width: "50px",
          height: "50px",
          borderRadius: "25px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          cursor: "pointer",
        }}
      >
        {icons}
      </div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          marginLeft: "15px",
        }}
      >
        {text}{" "}
      </div>
    </div>
  );
};

export default HeaderLeft;
