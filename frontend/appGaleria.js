import "./styles/app.css";

import Galeria from './models/Galeria';
import UI from './Interfaz/UIGaleria.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderGalerias();
});


document.getElementById('galeria-form')
  .addEventListener('submit', function(e) {

    const nombre = document.getElementById('nombre').value;
    
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('nombre', nombre);

    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui = new UI();

    // New galeria Object
    const galeria = new Galeria(nombre);

    // Validating User Input
    if (nombre === '') {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new galeria to the UI
      ui.addANewGaleria(formData);
      ui.renderMessage('New galeria Added Successfully', 'success', 2000);
    }

    e.preventDefault();
  });

document.getElementById('galerias-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteGaleria(e.target.getAttribute('_id'));
      ui.renderMessage('Galeria Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
