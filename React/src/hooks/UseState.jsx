import { useState } from "react";

const UseState = () => {
  const [color, setColor] = useState("Azul");
  const [modo, setModo] = useState(false);
  const [contador, setContador] = useState(0);
  const [numero, setNumero] = useState(0);
  const handleChangeColor = ()=>{
    setColor("Verde");
  }

  return (
    <>
      <section className={modo ? "bg-black text-white": "bg-white"}>
        <h1>El color es: {color}</h1>
        <button onClick={()=> setColor("Rojo")}>Cambiar el color</button>
        <button onClick={handleChangeColor}>Cambiar color a verde</button>

        <p>Cambiar modo oscuro/claro</p>
        <button onClick={()=> setModo(!modo)}>Cambiar a modo {modo ? "claro":"oscuro"}</button>

        <p>Contador: {contador}</p>
        <button onClick={()=> setContador((numero)=> numero - 1)}>Decrementar</button>
        <button onClick={()=> setContador((numero)=> numero + 1)}>Incrementar</button>

        <p>Numero aleatorio: {numero}</p>
        <button onClick={()=> setNumero(Math.floor(Math.random() * 100))}>Generar numero aleatorio</button>
      </section>
    </>
  );
};

export default UseState;
