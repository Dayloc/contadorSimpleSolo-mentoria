import React, { useState, useEffect } from "react";

const SimpleCounter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((ulau) => ulau + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center m-1">
      <h1>Hola soy SimpleCounter</h1>
      <p>El contador esta en : {seconds}</p>
    </div>
  );
};

export default SimpleCounter;
