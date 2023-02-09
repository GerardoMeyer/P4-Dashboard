import React from 'react'

export default function Props() {

  function alertRegistro(props) {
    return alert(`Registro de la leche: ${props.value}`)
  }
  return (
    <React.Fragment>
        {alertRegistro}
    </React.Fragment>
  )
}
