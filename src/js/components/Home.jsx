import React, { useState, useEffect } from "react";

import SecondsCounter02 from "./SecondsCounter02.jsx";
import SecondsCounter03 from "./SecondsCounter03.jsx";
import SecondsCounter01 from "./SecondsCounter01.jsx";
import SimpleCounter from "./SimpleCounter.jsx";

const Home = () => {
  return (
    <div className="text-center d-flex flex-column justify-content-center align-items-center">
      <h1 className="m-5">Contador de Segundos</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex ">
          <SecondsCounter01 />
        </div>

        <div className="d-flex ">
          <SecondsCounter02 />
        </div>
        <div className="d-flex ">
          <SecondsCounter03 />
        </div>
      </div>
      <SimpleCounter />
    </div>
  );
};

export default Home;
