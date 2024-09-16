import { useRef } from "react";

/*
UseRef es un hook que sirve para tener como referencia un elemento HTML,
es similar a document.getElementById(). Nos permite acceder a un elemento HTML.
UseRef devuelve un objeto mutable que persiste durante todo el ciclo de vida del componente. Se usa
comunmente para acceder a los elementos del DOM o para guardar valores que no causan unav nueva renderizacion.
*/

const UseRef = () => {
  const focusInput = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const hacerFocus = () => {
    //console.log(focusInput.current.value);
    focusInput.current.focus();
  }

  const handleChange = ()=>{
    console.log(email.current.value);
  }

  const iniciarSesion = ()=>{
    console.log(`Email: ${email.current.value} Contrasena: ${password.current.value}`);
  }

  return (
    <>
      <div>
        <input ref={focusInput} type="text" placeholder="Ingresa un texto" />
        <button onClick={hacerFocus}>Hacer focus al input</button>

        <input ref={email} onChange={handleChange} type="email" placeholder="Ingresa tu correo" />
        <input ref={password} type="password" placeholder="Ingresa tu contrasena" />
        <button onClick={iniciarSesion}>Iniciar sesion</button>
      </div>
    </>
  );
};

export default UseRef;
