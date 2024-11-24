import React from "react";
import "../../assets/styles/Loader.css"; // Estilos para el efecto
import logo from "../../assets/images/logo/ytlogo.png"

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={logo} alt="Loading" className="zoom-loader" />
    </div>
  );
};

export default Loader;
