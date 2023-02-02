import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'

export default function Navbar() {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img
            src="https://www.freepnglogos.com/uploads/coffee-png/coffee-east-side-deli-ltd-artisan-delicatessen-organic-15.png"
            alt='coffe'
            class='imgCafe'></img>
          <a to='/' class="navbar-brand" href="/">
            <strong>Coffe Tempo</strong>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/generarOrden">Generar pedido</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}
