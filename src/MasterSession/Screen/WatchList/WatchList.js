import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Payment from "../Payment";
import WatchListCard from "./WatchListCard";

const WatchList = ({ watch }) => {
  console.log(watch);

  const [totalQTY, setTotalQTY] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let cost = 0;
    let QTY = 0;

    watch.forEach((el) => {
      cost += el.qty * el.price;
      QTY += el.qty;
    });
    setTotalQTY(QTY);
    setTotalCost(cost);
  }, [setTotalCost, setTotalQTY, totalCost, totalQTY, watch]);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "space-between",
        padding: "40px 20px",
        paddingTop: "100px",
      }}
    >
      <div
        style={{
          position: "fixed",
        }}
      >
        <div>Summary</div>

        <br />
        <div>Total WatchList: {totalQTY} </div>
        <br />
        <br />

        <div>Total Cost: {Math.ceil(totalCost)}</div>

        <br />
        <br />
        <br />
        <br />

        <Payment r={totalCost} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginLeft: "200px",
        }}
      >
        {watch.map((el) => (
          <WatchListCard key={el.id} q={el} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    watch: state.movie.watchlist,
  };
};

export default connect(mapStateToProps)(WatchList);
