import React, { useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./Results.css";
import axios from "../../helpers/axios";
import FlipMove from "react-flip-move";

const Result = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Result;
