import "./styles/app.css";

import Proyecto from './models/Proyecto.js';
import UI from './Interfaz/UIProyecto';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderProyectos();
});


document.getElementById('proyecto-form')
  .addEventListener('submit', function(e) {

    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const descripcion1 = document.getElementById('descripcion1').value;
    const descripcion2 = document.getElementById('descripcion2').value;
    const descripcion3 = document.getElementById('descripcion3').value;
    const descripcion4 = document.getElementById('descripcion4').value;
    const descripcion5 = document.getElementById('descripcion5').value;
    
    const image1 = document.getElementById('image1').files;
    const image2 = document.getElementById('image2').files;
    const image3 = document.getElementById('image3').files;
    const image4 = document.getElementById('image4').files;
    const image5 = document.getElementById('image5').files;


    const formData = new FormData();
    formData.append('image1', image1[0]);
    formData.append('image2', image2[0]);
    formData.append('image3', image3[0]);
    formData.append('image4', image4[0]);
    formData.append('image5', image5[0]);

    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
    formData.append('descripcion1', descripcion1);
    formData.append('descripcion2', descripcion2);
    formData.append('descripcion3', descripcion3);
    formData.append('descripcion4', descripcion4);
    formData.append('descripcion5', descripcion5);

    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui = new UI();

    // New proyecto Object
    const proyecto = new Proyecto(titulo, descripcion, descripcion1,descripcion2, descripcion3,descripcion4, descripcion5);

    // Validating User Input
    if (titulo === '' || descripcion === '' || descripcion1 === '' || descripcion2 === '' || descripcion3 === '' || descripcion4 === '' || descripcion5 === '') {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new proyecto to the UI
      ui.addANewProyecto(formData);
      ui.renderMessage('New proyecto Added Successfully', 'success', 2000);
    }

    e.preventDefault();
  });

document.getElementById('proyecto-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteProyecto(e.target.getAttribute('_id'));
      ui.renderMessage('proyecto Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
