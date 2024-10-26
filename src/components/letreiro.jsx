import { useEffect, useState } from 'react';
import './letreiro.css'; // Importando CSS específico

function Letreiro() {
  const texto = 'Conheça a Fatec ';
  const [index, setIndex] = useState(0);
  const [textoExibido, setTextoExibido] = useState('');

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTextoExibido((prev) => prev + texto[index]);
      setIndex((prevIndex) => (prevIndex + 1) % texto.length);
    }, 300);

    return () => clearInterval(intervalo);
  }, [index]);

  return (
    <div className="letreiro">
      <h2>Letreiro</h2>
      <p>{textoExibido}</p>
    </div>
  );
}

export default Letreiro;
