// Importamos el hook useParams() de react-router-dom
import { useParams } from "react-router-dom";

// useParams() : Es un hook que permite acceder a los parametros de la URL en componentes
// De tu aplicacion. Este hook es especialmente util cuando estas trabajando con rutas
// dinamicas que contienen segmentos variables.

const Products = () => {

  const { id } = useParams();

  return (
    <>
      <section>
        <h1>PRODUCTS</h1>
        <p>{id}</p>
      </section>
    </>
  );
};

export default Products;
