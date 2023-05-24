import { Component } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import axios from "axios";
import Swal from "sweetalert2";

interface MovieState {
  movies: Array<string | {}>;
}

class Home extends Component<MovieState> {
  state = {
    movies: [],
    information: {},
    loading: false,
  };

  async fetchMovies() {
    this.setState({ loading: true });
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          import.meta.env.VITE_MOVIES_API
        }`
      )
      .then((response) => {
        console.log(response.data);
        const { results } = response.data;
        if (results) {
          this.setState({ movies: results });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Failed",
          text: `Something went wrong! Message : ${error}`,
          confirmButtonText: "OK",
        });
      })
      .finally(() => this.setState({ loading: false }));
  }

  async componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { movies } = this.state;

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
            {movies.map((item: any, index) => {
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
      </Layout>
    );
  }
}

export default Home;
