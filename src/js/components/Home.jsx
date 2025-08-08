import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import SimpleCounter from "./Contador"; // Asegúrate de la ruta
import SimpleCounter2 from "./Variante"; // Asegúrate de la ruta
import SecondsCounter from "./Contador";

const Home = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);
  const [counter6, setCounter6] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter1((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calcula los dígitos
  const digits = {
    digitSix: Math.floor(counter1 / 100000) % 10,
    digitFive: Math.floor(counter1 / 10000) % 10,
    digitFour: Math.floor(counter1 / 1000) % 10,
    digitThree: Math.floor(counter1 / 100) % 10,
    digitTwo: Math.floor(counter1 / 10) % 10,
    digitOne: counter1 % 10,
  };

  return (
    <div className="text-center d-flex flex-column justify-content-center align-items-center">
      <h1 className="mt-5">Contador de Segundos</h1>

      <div className="largo text-white d-flex">
        <div className="col-2 bg-secondary">{digits.digitSix}</div>
        <div className="col-2 bg-secondary">{digits.digitFive}</div>
        <div className="col-2 bg-secondary">{digits.digitFour}</div>
        <div className="col-2 bg-secondary">{digits.digitThree}</div>
        <div className="col-2 bg-secondary">{digits.digitTwo}</div>
        <div className="col-2 bg-secondary">{digits.digitOne}</div>
      </div>
      <div className="d-flex ">
        <SimpleCounter seconds={0} />

        <SimpleCounter />
      </div>

      <SimpleCounter2 />
    </div>
  );
};

export default Home;
