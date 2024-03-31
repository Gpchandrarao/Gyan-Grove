import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import banner from "../assets/Banner.svg";
import "../styles/Home.css";
import RecommendedSecotion from "./RecommendedSecotion";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Navbar />
      <div
        className="home-container"
        style={{
          backgroundImage: `url(${banner})`,
          height: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="main-heading">
          Discover Exciting Eventss Happening Near You - Stay Tuned for Updates!
        </h1>
        <p className="sub-heading">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
        </p>
      </div>
      <RecommendedSecotion />
    </div>
  );
};

export default Home;
