import { Button } from "antd";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import image from "../../asset/3.jpg";
import { addToWatchList, viewMovie } from "../State/actionState";

const MovieCard = ({ q, watch, single }) => {
  return (
    <div
      style={{
        paddingTop: "100px",
      }}
    >
      <div
        style={{
          width: "250px",
          // height: "520px",
          borderRadius: "10px",
          paddingBottom: "10px",
          // backgroundColor: "lightcoral",
          boxShadow: "0 4px 6px 0 rgba(0,0,0,0.3)",
          margin: "10px",
        }}
      >
        <img
          alt="title"
          src={q.image}
          style={{
            width: "250px",
            height: "350px",
            objectFit: "contain",
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
            boxShadow: "0 4px 6px 0 rgba(0,0,0,0.3)",
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
          <div
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: "12px",
              marginTop: "10px",
            }}
          >
            {q.category}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "10px",
          }}
        >
          <Link to={`/watchlist/${q.id}`}>
            <Button
              onClick={() => {
                single(q);
              }}
            >
              View Movie
            </Button>
          </Link>
          <Button
            onClick={() => {
              watch(q.id);
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    watch: (id) => {
      dispatch(addToWatchList(id));
    },
    single: (item) => {
      dispatch(viewMovie(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(MovieCard);
