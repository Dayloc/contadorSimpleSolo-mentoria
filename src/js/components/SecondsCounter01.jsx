import React, { useState, useEffect } from "react";

function SecondsCounter01() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000); //mil milisegundos es 1 segundo
    return () => clearInterval(timer);
  }, []);

  const digits = {
    digitSix: Math.floor(counter / 100000) % 10,
    digitFive: Math.floor(counter / 10000) % 10,
    digitFour: Math.floor(counter / 1000) % 10,
    digitThree: Math.floor(counter / 100) % 10,
    digitTwo: Math.floor(counter / 10) % 10,
    digitOne: counter % 10,
  };
  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="clock col-2 d-flex justify-content-end">🕛</div>
        <div className="largo text-white bg-dark">
          <div className="digit col-2 bg-dark">{digits.digitSix}</div>
          <div className="digit col-2 bg-dark">{digits.digitFive}</div>
          <div className="digit col-2 bg-dark">{digits.digitFour}</div>
          <div className="digit col-2 bg-dark">{digits.digitThree}</div>
          <div className="digit col-2 bg-dark">{digits.digitTwo}</div>
          <div className="digit col-2 bg-dark">{digits.digitOne}</div>
        </div>
      </div>
    </div>
  );
}

export default SecondsCounter01;
