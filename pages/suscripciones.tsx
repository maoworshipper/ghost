import React from 'react'

const Suscriptions = () => {
  return (
    <div>
       
       <h1>Suscripción</h1>
      
      <form>
  
      <label>Cliente:</label><br></br>
      <input list="cliente" name="cliente"></input><br></br>
      <datalist id="cliente"> 
      <option value="José Perez"></option>
      <option value="Mario Martínez"></option>
      <option value="Carlos Castro"></option>
      </datalist>

      <label>Plan:</label><br></br>
      <input list="plan" name="plan"></input><br></br>
      <datalist id="plan"> 
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
      </datalist>

      <label>Fecha de Activación:</label><br></br>
      <input type="date" id="fecha" name="fecha"></input><br></br>

      <label>Metodo de pago:</label><br></br>
      <input list="pago" name="pago"></input><br></br>
      <datalist id="pago"> 
      <option value="Efectivo"></option>
      <option value="Tarjeta Débito"></option>
      <option value="Tajeta Crédito"></option>
      </datalist>

      <label>Valor Pagado:</label><br></br>
      <input type="text" id="valor" name="valor"></input><br></br>

      <label>Dominio:</label><br></br>
      <input type="text" id="dominio" name="dominio"></input><br></br>

      <label>Tipo Recordatorio:</label><br></br>
      <input list="recordatorio" name="recordatorio"></input><br></br>
      <datalist id="recordatorio"> 
      <option value="WhatsApp"></option>
      <option value="Correo"></option>
      <option value="Ambos"></option>
      </datalist>

      <label>Recordatorios:</label><br></br>
      <input list="recordatorios" name="recordatorios"></input><br></br>
      <datalist id="recordatorios"> 
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
      </datalist>

      <label>Creado Por:</label><br></br>
      <input type="text" id="creado" name="creado"></input><br></br>
  
      </form>



    </div>
  )
}

export default Suscriptions;
