import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const SecondsCounter = ({ seconds: initialSeconds = 0 }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(true);
  const [isCountdown, setIsCountdown] = useState(false);
  const [countdownFrom, setCountdownFrom] = useState(0);
  const [alertTime, setAlertTime] = useState(null);
  const [alertShown, setAlertShown] = useState(false);

  // Formatear número a 6 dígitos
  const formatNumber = (num) => {
    return Math.max(0, num).toString().padStart(6, "0");
  };

  // Manejar el temporizador
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          const newSeconds = isCountdown ? prev - 1 : prev + 1;

          // Manejar alerta
          if (alertTime !== null && newSeconds === alertTime && !alertShown) {
            alert(
              `¡Alerta! Se ha alcanzado el tiempo de ${alertTime} segundos`
            );
            setAlertShown(true);
          }

          // Detener cuenta regresiva al llegar a cero
          if (isCountdown && newSeconds <= 0) {
            setIsRunning(false);
            return 0;
          }

          return newSeconds;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, isCountdown, alertTime, alertShown]);

  // Controlar la cuenta regresiva
  const handleCountdownToggle = () => {
    const newCountdownMode = !isCountdown;
    setIsCountdown(newCountdownMode);
    setSeconds(newCountdownMode ? countdownFrom : 0);
    setAlertShown(false);
  };

  // Reiniciar el contador
  const resetCounter = () => {
    setSeconds(isCountdown ? countdownFrom : 0);
    setIsRunning(false);
    setAlertShown(false);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "2rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      {/* Display del contador */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.5rem",
        }}
      >
        <FontAwesomeIcon
          icon={faClock}
          style={{ fontSize: "2rem", marginRight: "1rem" }}
        />
        <span style={{ fontSize: "3rem", fontFamily: "monospace" }}>
          {formatNumber(seconds)}
        </span>
      </div>

      {/* Controles principales */}
      <div style={{ marginBottom: "1.5rem" }}>
        <button
          onClick={() => setIsRunning(!isRunning)}
          style={{
            padding: "0.5rem 1rem",
            margin: "0 0.5rem",
            backgroundColor: isRunning ? "#dc3545" : "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {isRunning ? "Pausar" : "Reanudar"}
        </button>

        <button
          onClick={resetCounter}
          style={{
            padding: "0.5rem 1rem",
            margin: "0 0.5rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Reiniciar
        </button>
      </div>

      {/* Configuración de cuenta regresiva */}
      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ marginRight: "0.5rem" }}>
          <input
            type="checkbox"
            checked={isCountdown}
            onChange={handleCountdownToggle}
            style={{ marginRight: "0.3rem" }}
          />
          Modo cuenta regresiva
        </label>

        {isCountdown && (
          <input
            type="number"
            value={countdownFrom}
            onChange={(e) => setCountdownFrom(Number(e.target.value))}
            min="0"
            style={{
              padding: "0.3rem",
              width: "80px",
              marginLeft: "0.5rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
            placeholder="Segundos"
          />
        )}
      </div>

      {/* Configuración de alerta */}
      <div>
        <label style={{ marginRight: "0.5rem" }}>Alerta en:</label>
        <input
          type="number"
          value={alertTime || ""}
          onChange={(e) => {
            setAlertTime(e.target.value ? Number(e.target.value) : null);
            setAlertShown(false);
          }}
          min="0"
          style={{
            padding: "0.3rem",
            width: "80px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            marginRight: "0.5rem",
          }}
          placeholder="Segundos"
        />
        <span>segundos</span>
      </div>
    </div>
  );
};

export default SecondsCounter;
