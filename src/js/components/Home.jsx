import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import SimpleCounter from "./Contador"; // Asegúrate de la ruta
import SimpleCounter2 from "./Variante"; // Asegúrate de la ruta
import SecondsCounter from "./Contador";

const Home = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calcula los dígitos
  const digits = {
    digitSix: Math.floor(counter / 100000) % 10,
    digitFive: Math.floor(counter / 10000) % 10,
    digitFour: Math.floor(counter / 1000) % 10,
    digitThree: Math.floor(counter / 100) % 10,
    digitTwo: Math.floor(counter / 10) % 10,
    digitOne: counter % 10,
  };

  return (
    <div className="text-center">
      <h1 className="mt-5">Contador de Segundos</h1>

     {/*  <SimpleCounter seconds={60} /> */}

      <img src={rigoImage} alt="Rigo" className="img-fluid mt-4" />
      <p className="mt-4">
        Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>
      </p>
<SimpleCounter2 />
    </div>
  );
};

export default Home;
