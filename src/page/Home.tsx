import { Component } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { movies } from "../dummy/movies.json";
import Hero from "../components/Hero";

class Home extends Component {
  render() {
    return (
      <div className="w-full">
        <Navbar />
        <Hero />
        <h2 className="block text-center text-black text-4xl font-semibold mt-10">
          Our Movies
        </h2>
        <div className="flex justify-center item-center mt-10 gap-5">
          {movies.map((item, index) => {
            return (
              <Card
                key={index}
                id={"movies"}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
