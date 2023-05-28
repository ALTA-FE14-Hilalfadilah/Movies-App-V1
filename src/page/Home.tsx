import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Layout>
      <div className="w-full">
        <Navbar />
      </div>
      <Hero />
      <h2 className="block text-center text-black text-4xl font-semibold mt-10">
        Our Movies
      </h2>
      <div className="mt-10">
        <div className="flex flex-wrap justify-center item-center gap-5">
          {movies.map((item: any) => (
            <Card
              key={item.id}
              id="movies"
              title={item.title}
              description={item.vote_average}
              image={item.poster_path}
            />
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default withRouter(Home);
