import UseEffect from "../hooks/UseEffect";
import UseRef from "../hooks/UseRef";
import UseState from "../hooks/UseState";
import { useState, useEffect} from "react";
import useCalculator from "../hooks/useCalculator";
const Hooks = () => {

  const [resultado, setResultado] = useState(0);

  const handleOperation = ()=>{
    setResultado(useCalculator("50*2"));
  }

  useEffect(handleOperation,[]);

  return (
    <>
      <section>
        <h1>Use State</h1>
        <UseState />
      </section>
      <section>
        <h1>Use Effect</h1>
        <UseEffect/>
      </section>
      <section>
        <h1>Use Ref</h1>
        <UseRef/>
      </section>
      <section>
        <h1>Hook personalizado</h1>
        <p>Resultado : {resultado}</p>
      </section>
    </>
  );
};

export default Hooks;
