import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const SecondsCounter2 = () => {
  const [seconds, setSeconds] = useState(0);
 const [numero1,setNumero1]=useState(0)
  
  
  // Efecto para el temporizador
  useEffect(() => {
    
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
    
  }, []);
function numMasUno(){
  setNumero1(+1)

}
  // Formatear a 6 dígitos con ceros a la izquierda
  const formatNumber = (num) => {
    return num.toString().padStart(6, '0');
  };
  let extra=0
  if(seconds>10){
    extra+=1
  }

  return (
    <div  style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'monospace',
      fontSize: '3rem',
      margin: '2rem',
      
    }}>
      
      <FontAwesomeIcon icon={faClock} style={{ marginRight: '20px', fontSize: '2rem' }} />
      <span className="bg-info">{formatNumber(seconds)}</span>
      <p>{numero1}</p>
      <buuton oclic={numMasUno} >+1</buuton>
    </div>
  );
};

export default SecondsCounter2;