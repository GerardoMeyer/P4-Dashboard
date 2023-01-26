import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './GenerarOrden.css'

export default function GenerarOrden() {
  return (
    <React.Fragment>
            <div class="container">
            <div class="row mt-5 mb-5">
                <div class="col-sm-12 col-lg-6 ctnUno">
                    {/* Contenido Izquierdo */}
                    <div>
                        <p class="titulo text-center mb-4">
                            ¡Aquí puedes generar tú orden!
                        </p>
                        </div>
                        <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label"><strong>Tamaño del café</strong></label>
                            <input style={{width: '50%', border: '1px solid grey'}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required></input>
                            <div id="emailHelp" class="form-text">(Chico, Mediano, Grande)</div>
                        </div>
                        <br></br>
                        <br></br>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><strong>No. de raciones de azúcar</strong></label>
                            <input style={{width: '50%', border: '1px solid grey'}} type="password" class="form-control" id="exampleInputPassword1" required></input>
                            <div id="emailHelp" class="form-text">(Número entero)</div>
                        </div>
                        <br></br>
                        <br></br>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><strong>Tipo de leche</strong></label>  
                            <input style={{width: '50%', border: '1px solid grey'}} type="password" class="form-control" id="exampleInputPassword1" required></input>
                            <div id="emailHelp" class="form-text">(Entera, Deslactosada, Light)</div>
                        </div>
                        <button type="submit" class="btn btn-primary btnGenerar mt-3">Generar orden</button>
                    </form>
                </div>
                <div class="col-sm-12 col-lg-6 text-center ctnDos">
                    {/* Contenido derecho */}
                    <img    alt="..." src="https://www.thelist.com/img/gallery/if-youre-an-aquarius-this-is-the-perfect-coffee-order-for-you/intro-1638056949.jpg"
                            class="image-cafe"></img>
                </div>
            </div>
        </div> 
    </React.Fragment>
  )
}
