import { Header } from "antd/lib/layout/layout";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../asset/8.png";

const HeaderNav = ({ view }) => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    let newCounter = 0;
    view.forEach((el) => {
      newCounter += el.qty;
    });
    setCounter(newCounter);
  }, [counter, view]);

  return (
    <div>
      <Header
        style={{
          width: "100vw",
          display: "flex",
          position: "fixed",
          zIndex: "100",
        }}
      >
        <Link to="/">
          <img
            alt="Logo"
            src={logo}
            style={{
              width: "100px",
              height: "50px",
              objectFit: "contain",
            }}
          />
        </Link>
        <Link
          to="/watchlist"
          style={{
            display: "flex",
            margin: " 0 50px",
            fontWeight: "bold",
            fontSize: "20px",
            color: "white",
          }}
        >
          <div>WatchList:</div>
          <div
            style={{
              display: "flex",
              margin: " 0 10px",
              fontWeight: "bold",
              fontSize: "30px",
              color: "white",
            }}
          >
            {counter}
          </div>
        </Link>
      </Header>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    view: state.movie.watchlist,
  };
};

export default connect(mapStateToProps)(HeaderNav);
