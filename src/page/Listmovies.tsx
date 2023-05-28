import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Footer from "../components/footer";
import { withRouter } from "../Router/withRouter";

import axios from "axios";
import Swal from "sweetalert2";

const Listmovies: React.FC = () => {
  const [Listmovies, setMovies] = useState<Array<String | number>>([]);

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
      <h2 className="block text-black text-4xl font-bold mt-28 ml-8">
        List Movies
      </h2>
      <div className="mt-10">
        <div className="flex flex-wrap justify-center item-center gap-5">
          {Listmovies.map((item: any, index) => {
            return (
              <Card
                key={index}
                id={"movies"}
                title={item.title}
                description={item.vote_average}
                image={item.poster_path}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-36">
        <Footer />
      </div>
    </Layout>
  );
};

export default withRouter(Listmovies);
