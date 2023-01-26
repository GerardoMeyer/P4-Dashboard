import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function Footer() {
  return (
    <React.Fragment>
        <section id="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4 columna-abajo">
                        <div class="titulo-footer" style={{fontSize: '0.90rem', fontWeight: 'bold'}}>
                            SÍGUENOS
                        </div>
                        <hr></hr>
                        <a  style={{fontSize: '0.70rem'}} href="https://getbootstrap.com/docs/5.1/helpers/vertical-rule/" 
                            class="btn btn-outline-primary boton-redes" role="button"
                            aria-pressed="true"><i class="fab fa-facebook-square"></i> Facebook</a>
                        <br></br>
                        <br></br>
                    <a  style={{fontSize: '0.70rem'}} href="https://getbootstrap.com/docs/5.1/helpers/vertical-rule/" 
                        class="btn btn-outline-danger boton-redes" role="button"
                            aria-pressed="true"> Instagram </a>
                    </div>
                    <div class="col-lg-4 columna-abajo2">
                        <div class="titulo-footer" style={{fontSize: '0.90rem', fontWeight: 'bold'}}>SOPORTE</div>
                        <hr></hr>
                        <h5 style={{fontSize: '0.60rem'}}>Gerardo Torres Meyer</h5>
                    </div>
                    <div class="col-lg-4 columna-abajo3">
                        <h4 class="titulo-footer" 
                            style={{fontSize: '0.90rem', fontWeight: 'bold'}}>NOSTROS</h4>
                        <hr></hr>
                        <div style={{fontSize: '0.60rem'}}>¿Quiénes somos?</div>
                        <br></br>
                        <h5 style={{fontSize: '0.60rem'}}>¿De dónde proviene el café?</h5>
                        <br></br>
                        <h5 style={{fontSize: '0.60rem'}}>¿Es un producto totalmente natural?</h5>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
