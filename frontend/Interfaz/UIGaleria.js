import GaleriaService from '../services/GaleriaService';
const galeriaService = new GaleriaService();

import { format } from 'timeago.js';

class UI {

  async renderGalerias() {
    const galerias = await galeriaService.getGalerias();
    const galeriasCardContainer = document.getElementById('galerias-cards');
    galeriasCardContainer.innerHTML = '';
    galerias.forEach((galeria) => {
      const div = document.createElement('div');
      div.className = 'animated fadeInRight';
      div.innerHTML = `
      <div class="card m-2">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${galeria.image}" class="img-fluid" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-block px-2">
                    <h4 class="card-title">${galeria.nombre}</h4>
                    <a href="#" class="btn btn-danger delete" _id="${galeria._id}">X</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
          ${format(galeria.created_at)}
        </div>
      </div>
      `;
      galeriasCardContainer.appendChild(div);
    });
  }

  async addANewGaleria(galeria) {
    await galeriaService.postGaleria(galeria);
    this.renderGalerias();
    this.clearGaleriaForm();
  }

  clearGaleriaForm() {
    document.getElementById('galeria-form').reset();
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
    const galeriaForm = document.querySelector('#galeria-form');
    container.insertBefore(div, galeriaForm);
    // Removing the div after some secconds
    setTimeout(() => {
      document.querySelector('.message').remove();
    }, secondsToRemove);
  }

  async deleteGaleria(galeriaId) {
    await galeriaService.deleteGaleria(galeriaId);
    this.renderGalerias();
  }

}

export default UI;
