import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './GenerarOrden.css'
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc
} from 'firebase/firestore'
import {useState} from 'react';
import {db} from './Firebase'

export default function GenerarOrden() {
  // Vaciar Forms
  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);

  // Poder resetear el formulario
  const handleReset = () => {
      formRef.current.reset();
      setValidated(false);
  };

  // Variables
  const [info,
    setInfo] = useState([])
  const [order,
    setOrder] = useState()

  // Obtener registro
  const [registroTam,
    setRegistroTam] = useState()
  const handleChangeTam = event => {
    setRegistroTam(event.target.value)
  }

  const [registroLeche,
    setRegistroLeche] = useState()
  const handleChangeLeche = event => {
    setRegistroLeche(event.target.value)
  }

  const [registroPortion,
    setRegistroPortion] = useState()
  const handleChangePortion = event => {
    setRegistroPortion(event.target.value)
  }

  console.log(registroPortion)

  // Obtener la INFO  de la BD
  const getData = async() => {
    const snapshot = await getDocs(collection(db, 'orden'))
    const data = snapshot
      .docs
      .map((doc) => doc)
    setInfo(data)
    // Visualizando la INFO de la BD
    console.log(info.map((e) => e.data()))
  }

  let pedido = {
    size: `${registroTam}`,
    portions: `${registroPortion}`,
    milk: `${registroLeche}`
  }

  // Crear una nueva orden en la BD
  const createOrder = async() => {
    await addDoc(collection(db, 'orden'), pedido)
    getData()
    setOrder('')
    handleReset()
  }

  const [cambioLeche,
    setCambioLeche] = useState()
  const [input,
    setInput] = useState('')
  const handleCambioLeche = event => {
    setCambioLeche(event.target.value)
    setInput('')
  }

  // Actualizar registro
  const updateOrder = async(id, coleccion, milk) => {
    await updateDoc(doc(db, coleccion, id), {milk})
    getData()
    handleReset()
  }

  // Borrar registro
  const deleteOrder = async(id, coleccion) => {
    await deleteDoc(doc(db, coleccion, id))
    getData()
  }

  function Milk(props) {
    return <p>Tipo de leche actual: <i><strong>{props.tipo}</strong></i></p>;
  }

  function finalOrder() {
    createOrder()
    getData()
    handleReset()
  }

  // Últimos cambios
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
            <form ref={formRef}  validated={validated}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  <strong>Tamaño del café</strong>
                </label>
                <input
                  style={{
                  width: '50%',
                  border: '1px solid grey'
                }}
                  onChange={handleChangeTam}
                  value={registroTam}
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"></input>
                <div class="form-text">(Chico, Mediano, Grande)</div>
              </div>
              <br></br>
              <br></br>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  <strong>No. de raciones de azúcar</strong>
                </label>
                <input
                  style={{
                  width: '50%',
                  border: '1px solid grey'
                }}
                  onChange={handleChangePortion}
                  value={registroPortion}
                  type="text"
                  class="form-control"></input>
                <div class="form-text">(Número entero)</div>
              </div>
              <br></br>
              <br></br>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  <strong>Tipo de leche</strong>
                </label>
                <input style={{
                  width: '50%',
                  border: '1px solid grey'
                }} // onChange= {handleChange}
                  onChange={handleChangeLeche} value={registroLeche} type="text" class="form-control"></input>
                <div class="form-text">(Entera, Deslactosada, Light)</div>
              </div>
              <button
                onClick={finalOrder}
                type="button"
                class="btn btn-primary btnGenerar mt-3"
                value='Existe'>Generar orden</button>
              <br></br>
              <br></br>
              <button class="btn btn-success" onClick={getData} type="button">
                Visualizar registros
              </button>
              <br></br>
              <br></br>
              <Milk tipo= {registroLeche}/>

            </form>
          </div>
          <div class="col-sm-12 col-lg-6 text-center ctnDos">
            {/* Contenido derecho */}
            <img
              alt="..."
              src="https://www.thelist.com/img/gallery/if-youre-an-aquarius-this-is-the-perfect-coffee-order-for-you/intro-1638056949.jpg"
              class="image-cafe"></img>
          </div>
        </div>
      </div>

      <hr></hr>

      <h2 class="text-center mt-4">
        <strong>Registros</strong>
      </h2>
      <div class="cxontainer">
        <div class="row">
          <div class="col-sm-12 col-lg-6 contenedor-cambios text-center">
            <h2>
              <strong>Actualizar Leche</strong>
            </h2>
            <input
              type="text"
              class="input-leche-nueva form-text mt-3 form-control"
              onChange={handleCambioLeche}
              value={cambioLeche}
              placeholder="Leche nueva"></input>
          </div>
          <div class="col-sm-12 col-lg-6">
            <div class="container text-center mt-5">
              <table class="table">
                <thead>
                  <th>ID</th>
                  <th>Tamaño</th>
                  <th>Número de raciones</th>
                  <th>Tipo de leche</th>
                  <th>Actualizar Leche</th>
                  <th>Borrar Registro</th>
                </thead>

                <tbody id='tBody'>
                  {info && info.map((e) => {
                    return (

                      <tr>
                        <td>{e.id}</td>
                        <td>
                          {e
                            .data()
                            .size}
                        </td>
                        <td>
                          {e
                            .data()
                            .portions}
                        </td>
                        <td>
                          {e
                            .data()
                            .milk}
                        </td>
                        <td>
                          <button
                            class="btn btn-outline-primary"
                            onClick={() => {
                            updateOrder(e.id, 'orden', cambioLeche)
                          }}>
                            Actualizar
                          </button>
                        </td>
                        <td>
                          <button
                            class="btn btn-outline-danger"
                            onClick={() => deleteOrder(e.id, 'orden')}>
                            Borrar
                          </button>
                        </td>
                      </tr>

                    )
                  })
}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}
