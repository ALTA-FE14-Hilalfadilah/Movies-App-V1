import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../utils/Darkmode";
import { useDispatch, useSelector } from "react-redux";
import { addList, List, ListState } from "../features/FavoriteSlice";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Footer from "../components/footer";

import { withRouter } from "../Router/withRouter";
import axios from "axios";
import Swal from "sweetalert2";

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Array<String | number>>([]);
  const { darkMode } = useContext(DarkModeContext);
  const dispatch = useDispatch();
  const favorite = useSelector(
    (state: { favorite: ListState }) => state.favorite
  );
  const [id, setId] = useState<number>();

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          import.meta.env.VITE_MOVIES_API
        }`
      );
      const { results } = response.data;
      if (results) {
        setMovies(results);
      }
    } catch (error) {
      Swal.fire({
        title: "Failed",
        text: `Something went wrong! Message: ${error}`,
        confirmButtonText: "OK",
      });
    }
  };

  const addTofavorite = (item: any) => {
    const newList: List[] | string = [
      {
        id: item.id,
        title: item.title,
        description: item.vote_avarage,
        image: item.poster_path,
      },
    ];
    setId(item.id);
    dispatch(addList(newList));
    localStorage.setItem("items", favorite.items);
    console.log("add to favorite :", favorite.items);
    Swal.fire({
      icon: "success",
      title: "Success Added",
      text: "Successfully add to favorite",
      confirmButtonText: "OK",
    });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Layout>
      <div
        className={darkMode ? "bg-zinc-800 text-white" : "bg-white text-black"}
      >
        <Navbar />
        <Hero />
        <h2 className="block text-center text-4xl font-semibold mt-10">
          Our Movies
        </h2>
        <div className="mt-10">
          <div className="flex flex-wrap justify-center item-center gap-5">
            {movies.map((item: any, index) => (
              <Card
                key={index}
                id={item.id}
                title={item.title}
                description={item.vote_average}
                image={item.poster_path}
                handleFavorite={() => addTofavorite(item)}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default withRouter(Home);
