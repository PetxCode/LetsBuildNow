import React from "react";
import HeaderLeft from "../Header/HeaderLeft";
import { FlagFilled } from "@ant-design/icons";

const BodyLeft = () => {
  return (
    <div style={{}}>
      <div>
        <HeaderLeft icons={<FlagFilled />} text="Pages" />
      </div>
    </div>
  );
};

export default BodyLeft;
