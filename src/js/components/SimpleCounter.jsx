import React, { useState, useEffect } from "react";

const SimpleCounter = () => {
  const [seconds, setSeconds] = useState(0);
  const [seconds1, setSeconds1] = useState(0);
  const [seconds2, setSeconds2] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  /* const reinicio = () => {
    if (seconds > 9) {
      setSeconds(0);
      setSeconds1((prev) => prev + 1);
      if (seconds1 > 8) {
        setSeconds1(0);
        setSeconds2((prev) => prev + 1);
      }
    }
    return seconds;
  };
 */
  return (
    <div className="text-center m-1">
      <h1>Hola soy SimpleCounter</h1>
      <p>El contador esta en :{seconds}</p>
    </div>
  );
};

export default SimpleCounter;
