import { useEffect, useState } from "react";

/*
useEffect es un hook que nos permite realizar cosas en segundo plano.
(Asincronismo)

El useEffect cuenta con dos parametros:

1) Lo que se ejecutara en segundo plano (Funcion).

2) Son las dependencias (Variable que cada vez que son actualizadas, hacen que el useEffect vuelva a ejecutarse).
Pero... hay que tomar en cuenta unas cosas...

- Si no agrego un segundo parametro al useEffect se ejecutara constantemente.

- Si agrego corchetes vacios significa que no hay dependencias, el useEffect se ejecutara solo una vez.

- Si agrego alguna variable utilzada dentro del useEFfect como dependencia, Ej : [contador, modo], entonces
el useEffect se ejecutara cada vez que cambie el valor de esas variable.

*/
const UseEffect = () => {
  const [contador, setContador] = useState(0);
  const [ejecutar,setEjecutar] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setContador(contador + 1);
    }, 1000)
  },[ejecutar])

  return (
    <>
      <p>Me he renderizado {contador} veces</p>
      <button onClick={()=> setEjecutar(!ejecutar)}>Ejecutar UseEffect</button>
    </>
  );
};

export default UseEffect;
