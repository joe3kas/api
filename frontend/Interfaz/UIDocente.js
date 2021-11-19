import DocenteService from '../services/DocenteService';
const docenteService = new DocenteService();

import { format } from 'timeago.js';

class UI {

  async renderDocentes() {
    const docentes = await docenteService.getDocentes();
    const docentesCardContainer = document.getElementById('docentes-cards');
    docentesCardContainer.innerHTML = '';
    docentes.forEach((docente) => {
      const div = document.createElement('div');
      div.className = 'animated fadeInRight';
      div.innerHTML = `
      <div class="card m-2">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${docente.image}" class="img-fluid" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-block px-2">
                    <h4 class="card-title">${docente.nombre}</h4>
                    <p class="card-text">${docente.titulo}</p>
                    <p class="card-text">${docente.perfil}</p>
                    <p class="card-text">${docente.docenteDe}</p>
                    <a href="#" class="btn btn-danger delete" _id="${docente._id}">X</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
          ${format(docente.created_at)}
        </div>
      </div>
      `;
      docentesCardContainer.appendChild(div);
    });
  }

  async addANewDocente(docente) {
    await docenteService.postDocente(docente);
    this.renderDocentes();
    this.clearDocenteForm();
  }

  clearDocenteForm() {
    document.getElementById('docente-form').reset();
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
    const docenteForm = document.querySelector('#docente-form');
    container.insertBefore(div, docenteForm);
    // Removing the div after some secconds
    setTimeout(() => {
      document.querySelector('.message').remove();
    }, secondsToRemove);
  }

  async deleteDocente(docenteId) {
    await docenteService.deleteDocente(docenteId);
    this.renderDocentes();
  }

}

export default UI;
