import { Button } from "antd";
import React from "react";

const ButtonPros = ({ text, bgr, press }) => {
  return (
    <div>
      <Button
        style={{
          backgroundColor: bgr,
          color: "white",
        }}
        onClick={press}
      >
        {text}
      </Button>
    </div>
  );
};

export default ButtonPros;
