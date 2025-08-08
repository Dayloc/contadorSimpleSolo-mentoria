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

  const formatNumber = (num) => {
    return Math.max(0, num).toString().padStart(6, "0");
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          const newSeconds = isCountdown ? prev - 1 : prev + 1;

          if (alertTime !== null && newSeconds === alertTime && !alertShown) {
            alert(
              `¡Alerta! Se ha alcanzado el tiempo de ${alertTime} segundos`
            );
            setAlertShown(true);
          }

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

  const handleCountdownToggle = () => {
    const newCountdownMode = !isCountdown;
    setIsCountdown(newCountdownMode);
    setSeconds(newCountdownMode ? countdownFrom : 0);
    setAlertShown(false);
  };

  const resetCounter = () => {
    setSeconds(isCountdown ? countdownFrom : 0);
    setIsRunning(false);
    setAlertShown(false);
  };

  return (
    <div className="counter-container m-5">
      {/* Display del contador */}
      <div className="counter-display">
        <FontAwesomeIcon icon={faClock} className="counter-icon" />
        <span className="counter-number">{formatNumber(seconds)}</span>
      </div>

      {/* Controles principales */}
      <div className="controls-container">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`btn ${isRunning ? "btn-pause" : "btn-resume"}`}
        >
          {isRunning ? "Pausar" : "Reanudar"}
        </button>

        <button onClick={resetCounter} className="btn btn-reset">
          Reiniciar
        </button>
      </div>

      {/* Configuración de cuenta regresiva */}
      <div className="countdown-settings">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={isCountdown}
            onChange={handleCountdownToggle}
          />
          Modo cuenta regresiva
        </label>

        {isCountdown && (
          <input
            type="number"
            value={countdownFrom}
            onChange={(e) => setCountdownFrom(Number(e.target.value))}
            min="0"
            className="countdown-input"
            placeholder="Segundos"
          />
        )}
      </div>

      {/* Configuración de alerta */}
      <div className="alert-settings">
        <label>Alerta en:</label>
        <input
          type="number"
          value={alertTime || ""}
          onChange={(e) => {
            setAlertTime(e.target.value ? Number(e.target.value) : null);
            setAlertShown(false);
          }}
          min="0"
          className="alert-input"
          placeholder="Segundos"
        />
        <span>segundos</span>
      </div>
    </div>
  );
};

export default SecondsCounter;
