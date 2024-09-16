import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // AQUI IRIA TODA LA LOGICA PARA VALIDAR POR EJEMPLO SI EL USUARIO TIENE UNA SESION ACTIVA
  const isAuthenticated = false;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
