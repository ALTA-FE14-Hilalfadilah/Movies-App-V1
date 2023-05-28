import React from "react";
import image from "../image/wallpaper.jpg";

const Hero: React.FC = () => {
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
            <h1 className="mb-5 text-4xl font-bold">Welcome to ScenixMovie</h1>
            <p className="mb-5 text-lg">STREAMING FILMS</p>
            <button className="btn btn-primary rounded-full px-10">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
