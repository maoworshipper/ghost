import React from 'react'

const Clients = () => {
  return (
    <div>
    <h1>Clientes</h1>
      
    <form>

    <label>Identificaación:</label><br></br>
    <input type="text" id="identificacion" name="identificacnion"></input><br></br>
    <label>Nombre:</label><br></br>
    <input type="text" id="nombre" name="nombre"></input><br></br>
    <label>Ingrese tu correo electrónico:</label><br></br>
    <input type="email" id="email" name="email"></input><br></br>
    <label>Teléfonos:</label><br></br>
    <input type="tel" id="telefono" name="telefono"></input><br></br>
    <label>Ciudad:</label><br></br>
    <input list="ciudad" name="ciudad"></input>
    <datalist id="ciudad"> 
    <option value="Bogotá"></option>
    <option value="Villavicencio"></option>
    <option value="España"></option>
  
    </datalist>
       
      
        
  

    </form>


    </div>
  )
}

export default Clients;
