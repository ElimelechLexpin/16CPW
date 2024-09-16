import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Importamos los componentes de React-Router-Dom
import { HashRouter as Router } from "react-router-dom";
// Vamos a importar el archivo global de css
import './index.css'

// Importamos el archivo app
import Aplication from './aplication'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Aplication/>
    </Router>
  </StrictMode>,
)
