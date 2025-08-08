import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const SecondsCounter2 = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true); // Estado para controlar si el contador está activo

  // Efecto para el temporizador
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]); // Dependencia añadida para reiniciar el efecto cuando isRunning cambie

  // Formatear a 6 dígitos con ceros a la izquierda
  const formatNumber = (num) => {
    return num.toString().padStart(6, "0");
  };

  return (
    <div
      className="flex-column"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        fontSize: "3rem",
        margin: "2rem",
      }}
    >
      <div>
        <FontAwesomeIcon
          icon={faClock}
          style={{ marginRight: "20px", fontSize: "2rem" }}
        />
        <span className="bg-info">{formatNumber(seconds)}</span>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button
          className="btn btn-primary mx-2"
          onClick={() => setIsRunning(!isRunning)} // Alternar entre pausa y reanudar
        >
          <FontAwesomeIcon icon={isRunning ? faPause : faPlay} />
          {isRunning ? " Pausar" : " Reanudar"}
        </button>

        <button
          className="btn btn-danger mx-2"
          onClick={() => {
            setSeconds(0);
            setIsRunning(false); // Opcional: pausar al resetear
          }}
        >
          Resetear
        </button>
      </div>
    </div>
  );
};

export default SecondsCounter2;
