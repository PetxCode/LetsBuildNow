import { Header } from "antd/lib/layout/layout";
import React from "react";
import HeaderLeft from "./HeaderLeft";
import { FacebookOutlined, SearchOutlined } from "@ant-design/icons";

const HeaderHolder = () => {
  return (
    <div>
      <Header
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          width: "100vw",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            // backgroundColor: "red",
            width: "8.5vw",
            // paddingLeft: "12px",
            justifyContent: "space-between",
          }}
        >
          <HeaderLeft icons={<FacebookOutlined />} clr="#209dfc" />
          <HeaderLeft icons={<SearchOutlined />} clr="gray" />
        </div>

        <div
          style={{
            backgroundColor: "blue",
            flex: "1",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Home
        </div>

        <div
          style={{
            backgroundColor: "tomato",
            width: "20vw",
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "15px",
          }}
        >
          Home
        </div>
      </Header>
    </div>
  );
};

export default HeaderHolder;
