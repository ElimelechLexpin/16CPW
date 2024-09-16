// Importamos los componentes de React-Router-Dom
import { Routes, Route, useLocation } from "react-router-dom";

// Importamos las vistas
import Home from "./vistas/Home";

// Importamos el componente Navbar
import Navbar from "./componetes/Navbar";
import Footer from "./componetes/Footer";
import Contact from "./vistas/Contact";
import Login from "./vistas/Login";
import Products from "./vistas/Products";
import PrivateRoute from "./routes/PrivateRoute";
import Hooks from "./vistas/Hooks";
import ApiNoKey from "./vistas/ApiNoKey";
import ApiKey from "./vistas/ApiKey";
import ApiNoKeyItem from "./vistas/ApiNoKeyItem";

/*
Que es react router?
Es una biblioteca que proporciona navegacion para aplicaciones de React.

- Browser Router : Envuelve toda la aplicacion y permite el enrutamiento funcione.
- Router : Envuelve toda la aplicacion como Browser Router pero esto es simplemente un name.
- Routes : Este componente se utiliza para definir las diferentes rutas de la aplicacion.
- Route : Cada Route define una ruta URL y el componente que se renderizara cuando la ruta coincida.

*/

const Aplication = () => {
  const location = useLocation();

  // Definir las rutas donde no queremos mostrar el navbar y el footer
  const noNavbarFooter = ["/login"];

  // Vamos a crear una condicion que verifique si la ruta actual no debe mostrar el navbar o el footer
  const showNavbarFooter = !noNavbarFooter.includes(location.pathname);

  return (
    <>
      {showNavbarFooter && <Navbar />}
      <Routes>
        {/* RUTAS PUBLICAS */}
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Products/>} />
        <Route path="/hooks" element={<Hooks/>} />
        <Route path="/apinokey" element={<ApiNoKey/>} />
        <Route path="/apinokey/:id" element={<ApiNoKeyItem/>} />
        <Route path="/apikey" element={<ApiKey/>} />
        {/* RUTAS PRIVADAS */}
        <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<>DASHBOARD</>} />
        </Route>
        {/* LA RUTA DE 404 DEBE IR AL FINAL */}
        <Route path="/*" element={<>404</>} />
      </Routes>
      {showNavbarFooter && <Footer />}
    </>
  );
};

export default Aplication;
