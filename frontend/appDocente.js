import "./styles/app.css";

import UI from './Interfaz/UIDocente';
import Docente from "./models/Docente.js";

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderDocentes();
});


document.getElementById('docente-form')
  .addEventListener('submit', function(e) {

    const nombre = document.getElementById('nombre').value;
    const titulo = document.getElementById('titulo').value;
    const perfil = document.getElementById('perfil').value;
    const docenteDe = document.getElementById('docenteDe').value;
    
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('nombre', nombre);
    formData.append('titulo', titulo);
    formData.append('perfil', perfil);
    formData.append('docenteDe', docenteDe);

    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui = new UI();

    // New docente Object
    const docente = new Docente (nombre, titulo, perfil,docenteDe);

    // Validating User Input
    if (nombre === '' || titulo === '' || perfil === '' || docenteDe === '') {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new docente to the UI
      ui.addANewDocente(formData);
      ui.renderMessage('New docente Added Successfully', 'success', 2000);
    }

    e.preventDefault();
  });

document.getElementById('docentes-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteDocente(e.target.getAttribute('_id'));
      ui.renderMessage('docente Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
