import React from "react";
import Hero from "./Hero";
import heroesData from "../data/heroes.json";
import "../style/HeroesPage.css";

const HeroesPage = () => {
  return (
    <React.Fragment>
      <h1>Heroes</h1>
      <div className="gallery">
        {" "}
        {/* Добавляем контейнер .gallery */}
        {heroesData.map((hero, index) => (
          <Hero key={index} hero={hero} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default HeroesPage;
