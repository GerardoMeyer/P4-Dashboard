import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './NotFound.css'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <React.Fragment>
        <div class="card" style={{width: '25rem'}}>
            <div class="card-body">
                <h5 class="card-title">404 Página no encotrada</h5>
                <h6 class="card-subtitle mb-2 text-muted">Error al encontrar la página</h6>
                <p class="card-text">
                    Estos errores pueden producirse cuando alguien accede a una URL que no existe en tu sitio, 
                    ya sea porque la ha introducido incorrectamente en el navegador o porque la URL a la que lleva 
                    un enlace no es la correcta. Si este error ocurre con mucha frecuencia, quizá te interese crear 
                    una redirección.
                </p>
                <NavLink to='/' class="card-link">Regresar a la página principal</NavLink>
            </div>
        </div>
    </React.Fragment>
  )
}
