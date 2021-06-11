import axios from "axios";
import React from "react";
import { connect, useDispatch } from "react-redux";
import { addMovie } from "../State/actionState";
import MovieCard from "./MovieCard";

const Movie = ({ view }) => {
  const dispatch = useDispatch();

  const getData = async () => {
    const API = "809fe8831c171bafb9e2d46a95bd74a3";
    // https://api.themoviedb.org/3/trending/all/day?api_key=${API}

    const res = await axios.get(`https://fakestoreapi.com/products`);
    console.log(res);
    if (res) {
      dispatch(addMovie(res.data));
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {view.map((el) => (
          <MovieCard key={el.id} q={el} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    view: state.movie.movieDataBase,
  };
};

export default connect(mapStateToProps)(Movie);
