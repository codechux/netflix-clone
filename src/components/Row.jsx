import axios from "axios";
import Movie from "./Movie";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, Id }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  const slideL = () => {
    let slider = document.querySelector("#slider" + Id);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideR = () => {
    let slider = document.querySelector("#slider" + Id);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  // console.log(movies);
  return (
    <div>
      <h2 className="text-white font-bold p-4 md:text-xl">{title}</h2>
      <div className="flex items-center relative group">
        <MdChevronLeft
          onClick={slideL}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + Id}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideR}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default Row;
