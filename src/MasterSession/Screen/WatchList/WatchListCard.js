import { Button, Input } from "antd";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import image from "../../../asset/3.jpg";
import { adjustWatchList, removeFromWatchList } from "../../State/actionState";

const WatchListCard = ({ remove, q, QTY }) => {
  const [r, setR] = useState(q.qty);
  return (
    <div
      style={
        {
          // paddingTop: "100px",
        }
      }
    >
      <div
        style={{
          width: "250px",
          // height: "500px",
          borderRadius: "10px",
          // backgroundColor: "lightcoral",
          boxShadow: "0 4px 6px 0 rgba(0,0,0,0.3)",
          margin: "10px",
          paddingBottom: "30px",
        }}
      >
        <img
          alt="title"
          src={q.image}
          style={{
            width: "250px",
            height: "350px",
            objectFit: "cover",
            borderRadius: "10px 10px 0 0",
            boxShadow: "0 4px 6px 0 rgba(0,0,0,0.3)",
            // zIndex: "-1",
          }}
        />
        <div
          style={{
            zIndex: "1",
            position: "absolute",
            width: "60px",
            height: "60px",
            borderRadius: "30px ",
            backgroundColor: "black",
            marginTop: "-30px",
            marginLeft: "10px",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "25px",
              backgroundColor: "#202021",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "bold",
              marginTop: "5px",
              zIndex: "1",
              marginLeft: "5px",
              marginBottom: "5px",
              border: "4px solid red",
            }}
          >
            {q.price}
          </div>
        </div>
        <br />
        <br />
        <br />
        <div
          style={{
            margin: "0 15px",
          }}
        >
          <div>{q.title}</div>
          <div>{q.category}</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "10px",
          }}
        >
          <Input
            type="number"
            min="1"
            value={r}
            onChange={(e) => {
              setR(e.target.value);
              QTY(q.id, e.target.value);
            }}
          />
          <Button
            onClick={() => {
              remove(q.id);
            }}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => {
      dispatch(removeFromWatchList(id));
    },
    QTY: (id, value) => {
      dispatch(adjustWatchList(id, value));
    },
  };
};

export default connect(null, mapDispatchToProps)(WatchListCard);
