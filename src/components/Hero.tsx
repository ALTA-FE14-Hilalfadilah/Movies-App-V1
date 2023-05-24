import { Component } from "react";
import image from "../image/wallpaper.jpg";

class Hero extends Component {
  render() {
    return (
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-xl">
              <h1 className="mb-5 text-5xl font-bold">Welcome to MitMovie</h1>
              <p className="mb-5">STREAMING FILMS</p>
              <button className="btn btn-primary rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
