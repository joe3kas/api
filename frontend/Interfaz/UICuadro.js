import CuadroService from '../services/CuadroService';
const cuadroService = new CuadroService();

import { format } from 'timeago.js';

class UI {

  async renderCuadros() {
    const cuadros = await cuadroService.getCuadros();
    const cuadrosCardContainer = document.getElementById('cuadros-cards');
    cuadrosCardContainer.innerHTML = '';
    cuadros.forEach((cuadro) => {
      const div = document.createElement('div');
      div.className = 'animated fadeInRight';
      div.innerHTML = `
      <div class="card m-2">
        <div class="row no-gutters">
            <div class="col-md-8">
                <div class="card-block px-2">
                    <h4 class="card-title">${cuadro.nombre}</h4>
                    <p class="card-text">${cuadro.grado}</p>
                    <p class="card-text">${cuadro.motivo}</p>
                    <a href="#" class="btn btn-danger delete" _id="${cuadro._id}">X</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
          ${format(cuadro.created_at)}
        </div>
      </div>
      `;
      cuadrosCardContainer.appendChild(div);
    });
  }

  async addANewCuadro(cuadro) {
    await cuadroService.postCuadro(cuadro);
    this.renderCuadros();
    this.clearCuadroForm();
  }

  clearCuadroForm() {
    document.getElementById('cuadro-form').reset();
    document.getElementById('nombre').focus();
  }

  renderMessage(message, colorMessage, secondsToRemove) {
    // Creating a div
    const div = document.createElement('div');
    // Styling the div
    div.className = `message ${colorMessage}`;
    // Adding Text to the div
    div.appendChild(document.createTextNode(message));
    // Puting in the documnet
    const container = document.querySelector('.col-md-4');
    const cuadroForm = document.querySelector('#cuadro-form');
    container.insertBefore(div, cuadroForm);
    // Removing the div after some secconds
    setTimeout(() => {
      document.querySelector('.message').remove();
    }, secondsToRemove);
  }

  async deleteCuadro(cuadroId) {
    await cuadroService.deleteCuadro(cuadroId);
    this.renderCuadros();
  }

}

export default UI;
