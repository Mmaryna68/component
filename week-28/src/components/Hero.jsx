import React, { useState } from "react";
import "../style/Hero.css";

const Hero = ({ hero }) => {
  const {
    name,
    url,
    universe,
    alterego,
    occupation,
    friends,
    superpowers,
    info,
  } = hero;

  const [showInfo, setShowInfo] = useState(false); // Добавляем состояние для отображения информации

  const handleMouseEnter = () => {
    setShowInfo(true); // При наведении на элемент показываем информацию
  };

  const handleMouseLeave = () => {
    setShowInfo(false); // При уходе курсора скрываем информацию
  };

  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {" "}
      {/* Применяем класс "card" для стилизации */}
      <h2>{name}</h2>
      <img src={url} alt={name} />
      <p>Universe: {universe}</p>
      <p>Alter Ego: {alterego}</p>
      <p>Occupation: {occupation}</p>
      <p>Friends: {friends}</p>
      <p>Superpowers: {superpowers}</p>
      {showInfo && <p>{info}</p>}{" "}
      {/* Показываем информацию, если showInfo равно true */}
      <div className="button">
        {" "}
        {/* Добавляем элемент .button */}
        CLICK
      </div>
    </div>
  );
};

export default Hero;
