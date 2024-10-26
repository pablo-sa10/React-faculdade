import { useEffect, useState } from 'react';
// import './relogio.css'; // Importando CSS específico

function Relogio() {
  const [horaAtual, setHoraAtual] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="relogio">
      <h2>Relógio Atual</h2>
      <p>{horaAtual}</p>
    </div>
  );
}

export default Relogio;
