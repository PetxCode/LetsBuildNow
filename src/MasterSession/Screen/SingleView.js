import { Button } from "antd";
import React from "react";
import { connect } from "react-redux";
import image from "../../asset/3.jpg";
import { addToWatchList } from "../State/actionState";

const SingleView = ({ single, add }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100vw",
          justifyContent: "center",
          padding: "30px 20px",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "450px",
            borderRadius: "10px",
            backgroundColor: "lightblue",
          }}
        >
          <img
            alt={single.title}
            src={single.image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
        <div
          style={{
            width: "600px",
            height: "450px",
            backgroundColor: "tomato",
            marginLeft: "20px",
            padding: "20px",
          }}
        >
          <div>title</div>
          <div>title detail</div>
          <div>title detail</div>
          <Button
            onClick={() => {
              add(single.id);
            }}
          >
            Add to WatchList
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    single: state.movie.currentState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (id) => {
      dispatch(addToWatchList(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleView);
