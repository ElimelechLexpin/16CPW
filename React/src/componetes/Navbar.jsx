// Importar el archivo de estilo del navbar .css
import "../styles/navbar.css";

// Importar el archivo de estilo del navbar .sass
//import '../styles/navbar.sass'   Debemos instalar SASS

// Vamos a importar Link de react-router-dom que nos permite crear enlaces para la barra de navegacion
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {

	const location = useLocation();

  const estilos = {
    nav: "w-full bg-slate-600 dark:bg-black text-white flex justify-between items-center px-8 py-6",
    imagen: "w-32 mix-blend-multiply",
    contenedor_anclas: "flex gap-4",
    anclas: "font-bold font-[Arial] hover:text-gray-400",
		active: "text-green-500 font-bold font-[Arial] hover:text-green-800"
  };

  return (
    <nav className={estilos.nav}>
      <img
        className={estilos.imagen}
        src="https://img.freepik.com/vector-gratis/vector-diseno-degradado-colorido-pajaro_343694-2506.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid"
        alt="logo"
      />

      <div className={estilos.contenedor_anclas}>
        <NavLink className={({ isActive })=> isActive ? estilos.active: estilos.anclas} to="/products">
          Productos
        </NavLink>
        <NavLink className={({ isActive })=> isActive ? estilos.active : estilos.anclas} to="/login">
          Login
        </NavLink>
				<Link className={location.pathname === "/contacto" ? estilos.active: estilos.anclas} to="/contacto">
          Contacto
        </Link>
      </div>
      <ThemeToggle/>
    </nav>
  );
};

export default Navbar;
