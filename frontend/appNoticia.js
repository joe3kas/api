import "./styles/app.css";

import Noticia from './models/Noticia.js';
import UI from './Interfaz/UINoticia';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderNoticias();
});


document.getElementById('noticia-form')
  .addEventListener('submit', function(e) {

    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const descripcion1 = document.getElementById('descripcion1').value;
    const descripcion2 = document.getElementById('descripcion2').value;
    const descripcion3 = document.getElementById('descripcion3').value;
    
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
    formData.append('descripcion1', descripcion1);
    formData.append('descripcion2', descripcion2);
    formData.append('descripcion3', descripcion3);

    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui = new UI();

    // New noticia Object
    const noticia = new Noticia(titulo, descripcion, descripcion1,descripcion2, descripcion3);

    // Validating User Input
    if (titulo === '' || descripcion === '' || descripcion1 === '' || descripcion2 === '' || descripcion3 === '') {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new noticia to the UI
      ui.addANewNoticia(formData);
      ui.renderMessage('New noticia Added Successfully', 'success', 2000);
    }

    e.preventDefault();
  });

document.getElementById('noticias-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteNoticia(e.target.getAttribute('_id'));
      ui.renderMessage('noticia Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
