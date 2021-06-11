import { Input } from "antd";
import React from "react";
import img from "../../../asset/3.jpg";

const Center = () => {
  return (
    <div>
      <div
        style={{
          width: "500px",
          height: "150px",
          backgroundColor: "white",
          margin: "20px 0",
          borderRadius: "10px",
          boxShadow: " 0px 4px 7px 0px rgba(0,0,0, 0.3) ",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "60px",
            alignItems: "center",
            margin: "0 10px",
          }}
        >
          <div>
            <img
              alt="img"
              src={img}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "25px",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            style={{
              marginLeft: "10px",
              flex: "1",
              backgroundColor: "lightgray",
              borderRadius: "30px",
              height: "35px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px",
            }}
          >
            <input
              placeholder="What's on your Mind"
              style={{
                width: "85%",
                backgroundColor: "transparent",
                color: "transparent",
                border: "none",
                borderWidth: "none",
                outline: "none",
              }}
            />
          </div>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default Center;
