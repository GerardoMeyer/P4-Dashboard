import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css'

export default function Home() {
  return (
    <React.Fragment>
        <div class="abs-center justify-content-center text-center">
            <div class="titulo">
                <p>¡Bienvenido!</p>
            </div>

            <hr></hr>
        <div class="card" style={{width: '25%'}}>
            <img    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Latte_and_dark_coffee.jpg/1200px-Latte_and_dark_coffee.jpg" 
                    class="card-img-top" alt="..."></img>
            <div class="card-body text-center">
                <h5 class="card-title titulo-negritas">¡Ordena tú café preferido!</h5>
                <p class="card-text">
                    El cultivo del café está culturalmente ligado a la historia y al progreso de muchos países que lo 
                    han producido por más de un siglo. Durante el periodo 2012-2013 se produjeron 87 millones de toneladas 
                    de café, de los cuales se exportó aproximadamente un 80 % por un valor de 19 100 millones de dólares, 
                    mientras que el valor bruto de la industria total asociada al comercio del café se estima en 173 400 
                    millones de dólares.
                </p>
            </div>
            </div>
        </div>

        <hr></hr>

        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-lg-6 ctnUno">
                    {/* Contenido Izquierdo */}
                    <img alt="coffee" src="https://s1.1zoom.me/big0/189/Coffee_Cinnamon_Vapor_Grain_Cup_Saucer_564306_1280x800.jpg" class="imgHome"></img>
                </div>
                <div class="col-sm-12 col-lg-6 text-center ctnDos">
                    {/* Contenido derecho */}
                    <p class="titulo-negritas">Un poco sobre el café...</p>
                    <p>
                        El cultivo del café es para muchos de los países tropicales en desarrollo una de las pocas actividades
                        económicas en que ellos tienen alguna ventaja comparativa. Este producto no sólo representa una importante
                        origen de divisas, sino que es una de las principales fuentes de ingresos en efectivo de las zonas rurales. Hace
                        posible que países como Colombia puedan comprar bienes manufacturados y estimula la actividad económica
                        interna al otorgar mayor poder adquisitivo a sus agricultores.
                    </p>
                </div>
            </div>
        </div>

        <hr></hr>

        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-lg-6 ctnUno text-center">
                    {/* Contenido Izquierdo */}
                    <p class="titulo-negritas">¡La composición del café!</p>
                    <p>
                        El café tiene múltiples componentes. Los granos de café crudos tienen una composición diferente entre la
                        variedad arábica y la Robusta. En la variedad arábica, la cafeína comprende el 1,2% de la materia seca, 4,2%
                        minerales, de los cuales 1,7% es potasio; 16% lípidos, 1,0% trigonelinas, 11,5% proteínas y aminoácidos, 1,4%
                        ácidos alifáticos, 6,5% despidos (ácidos clorogénicos), 0,2% glucósidos y 58% carbohidratos. En la variedad
                        Robusta, la cafeína comprende el 2,2% de la materia seca, 4,4% minerales, de los cuales 1,8% corresponen
                        al potasio; 10% lípidos, 0,7% trigonelinas, 11,8% proteínas y aminoácidos, 1,4% ácidos alifáticos, 10% ácidos
                        clorogénicos y 59,5% glucósidos trazas y carbohidratos (Tabla 1). El contenido de agua de los granos de café
                        crudo comercial varía entre 8% y 12%.
                    </p>
                </div>
                <div class="col-sm-12 col-lg-6 text-center ctnDos">
                    {/* Contenido derecho */}
                    <img alt="coffee" src="https://www.hosteleriasalamanca.es/fotos/1470297558.2728.jpg" class="imgHome"></img>
                </div>
            </div>

            <hr></hr>

            <div class="container">
            <div class="row">
                <div class="col-sm-12 col-lg-6 ctnUno">
                    {/* Contenido Izquierdo */}
                    <img alt="coffee" src="https://blog.apartmentbarcelona.com/wp-content/uploads/2018/09/federal_cafe-copia-1024x731.jpg" class="imgHome"></img>
                </div>
                <div class="col-sm-12 col-lg-6 text-center ctnDos">
                    {/* Contenido derecho */}
                    <p class="titulo-negritas">¡Grandes personajes del café!</p>
                    <p>
                        Grandes personajes de la historia universal fueron amantes y especialistas en la degustación del café.
                        Madame de Pompadour, amante y consejera de Luis XV en Francia, Honorato de Balzac quien decía que bebió
                        50.000 tazas de café cargado para escribir su obra «La comedia humana»; Emmanuel Kant, filósofo, azotó
                        a un criado por la demora en servirle un café luego de la cena. Voltaire (François-Marie arouet), consumió
                        entre 50 y 72 tazas de café al día. Beethoven contó la cantidad ideal de granos de café por taza. Juan Sebastian
                        Bach y Goethe también fueron grandes bebedores de café. 
                    </p>
                </div>
            </div>
        </div>
        </div>
    </React.Fragment>
  )
}