import React from 'react'

const Plans = () => {
  return (
    <div>
      
      <h1>Clientes</h1>
      
    <form>

    <label>Nombre:</label><br></br>
    <input type="text" id="nombre" name="nombre"></input><br></br>
    <label>Duración:</label><br></br>
    <input list="duracion" name="duracion"></input><br></br>
    <datalist id="duracion"> 
    <option value="30 Horas"></option>
    <option value="50 Horas"></option>
    <option value="70 Horas"></option>
    </datalist>
    <label>Valor:</label><br></br>
    <input type="text" id="valor" name="valor"></input><br></br>
    <label>Estado:</label><br></br>
    <input list="estado" name="estado"></input><br></br>
    <datalist id="estado"> 
    <option value="Activo"></option>
    <option value="Inactivo"></option>
    </datalist>

    </form>
      
     
      
      
      </div>
  )
}

export default Plans;
