import "./styles/app.css";

import Proyecto from './models/Proyecto.js';
import UI from './Interfaz/UIProyecto.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderProyectos();
});


document.getElementById('proyecto-form')
  .addEventListener('submit', function (e) {

    const nombre = document.getElementById('nombre').value;
    const descripcion1 = document.getElementById('descripcion1').value;
    const descripcion2 = document.getElementById('descripcion2').value;
    const descripcion3 = document.getElementById('descripcion3').value;
    const descripcion4 = document.getElementById('descripcion4').value;
    const descripcion5 = document.getElementById('descripcion5').value;
    const descripcion6 = document.getElementById('descripcion6').value;
    const descripcion7 = document.getElementById('descripcion7').value;
    const descripcion8 = document.getElementById('descripcion8').value;
    const descripcion9 = document.getElementById('descripcion9').value;
    const descripcion10 = document.getElementById('descripcion10').value;
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('nombre', nombre);
    formData.append('descripcion1', descripcion1);
    formData.append('descripcion2', descripcion2);
    formData.append('descripcion', descripcion3);
    formData.append('descripcion', descripcion4);
    formData.append('descripcion', descripcion5);
    formData.append('descripcion', descripcion6);
    formData.append('descripcion', descripcion7);
    formData.append('descripcion', descripcion8);
    formData.append('descripcion', descripcion9);
    formData.append('descripcion', descripcion10);


    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui = new UI();

    // New proyecto Object
    const proyecto = new Proyecto(nombre, descripcion1, descripcion2, descripcion3, descripcion4, descripcion5, descripcion6, descripcion7, descripcion8, descripcion9, descripcion10);

    // Validating User Input
    if (nombre === '' || descripcion1 === '' || descripcion2 === '' || descripcion3 === ''|| descripcion4 === ''|| descripcion5 === ''|| descripcion6 === ''|| descripcion7 === ''|| descripcion8  === ''|| descripcion9 === ''|| descripcion10 === '') {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new proyecto to the UI
      ui.addANewProyecto(formData);
      ui.renderMessage('New proyecto Added Successfully', 'success', 2000);
    }

    e.preventDefault();
  });

document.getElementById('proyectos-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteProyecto(e.target.getAttribute('_id'));
      ui.renderMessage('Proyecto Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
