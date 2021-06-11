import React from "react";
import BodyCenter from "./BodyCenter";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";

const Body = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "space-between",
        backgroundColor: "#F0F2F5",
      }}
    >
      <BodyLeft />
      <BodyCenter />
      <BodyRight />
    </div>
  );
};

export default Body;
