import "./styles/app.css";

import UI from './Interfaz/UICuadro.js';
import Cuadro from './models/Cuadro.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderCuadros();
});


document.getElementById('cuadro-form')
  .addEventListener('submit', function(e) {

    const nombre = document.getElementById('nombre').value;
    const grado = document.getElementById('grado').value;
    const nivel = document.getElementById('nivel').value;
    const motivo = document.getElementById('motivo').value;
    

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('grado', grado);
    formData.append('nivel', nivel);
    formData.append('motivo', motivo);

    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui = new UI();

    // New cuadro Object
    const cuadro = new Cuadro(nombre, grado,nivel ,motivo);

    // Validating User Input
    if (nombre === '' || grado === '' || nivel === '' || motivo === '' ) {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new cuadro to the UI
      ui.addANewCuadro(formData);
      ui.renderMessage('New honor Added Successfully', 'success', 2000);
    }

    e.preventDefault();
  });

document.getElementById('cuadros-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteCuadro(e.target.getAttribute('_id'));
      ui.renderMessage('cuadro Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
