import "./styles/app.css";

import Slider from './models/Slider.js';
import UI from './Interfaz/UISlider.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderSliders();
});


document.getElementById('slider-form')
  .addEventListener('submit', function(e) {

    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);

    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui = new UI();

    // New slider Object
    const slider = new Slider(nombre, descripcion);

    // Validating User Input
    if (nombre === '' || descripcion === '' ) {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new slider to the UI
      ui.addANewSlider(formData);
      ui.renderMessage('New slider Added Successfully', 'success', 2000);
    }

    e.preventDefault();
  });

document.getElementById('sliders-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteSlider(e.target.getAttribute('_id'));
      ui.renderMessage('slider Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
