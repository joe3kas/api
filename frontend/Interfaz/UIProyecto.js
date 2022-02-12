import ProyectoService from '../services/ProyectoService';
const proyectoService = new ProyectoService();

import { format } from 'timeago.js';

class UI {

  async renderProyectos() {
    const proyectos = await proyectoService.getProyectos();
    const proyectosCardContainer = document.getElementById('proyectos-cards');
    proyectosCardContainer.innerHTML = '';
    proyectos.forEach((proyecto) => {
      const div = document.createElement('div');
      div.className = 'animated fadeInRight';
      div.innerHTML = `
      <div class="card m-2">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${proyecto.image1}" class="img-fluid" alt="">
            </div>
            <div class="col-md-4">
                <img src="${proyecto.image2}" class="img-fluid" alt="">
            </div>
            <div class="col-md-4">
                <img src="${proyecto.image3}" class="img-fluid" alt="">
            </div>
            <div class="col-md-4">
                <img src="${proyecto.image4}" class="img-fluid" alt="">
            </div>
            <div class="col-md-4">
                <img src="${proyecto.image5}" class="img-fluid" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-block px-2">
                    <h4 class="card-title">${proyecto.titulo}</h4>
                    <p class="card-text">${proyecto.descripcion}</p>
                    <p class="card-text">${proyecto.descripcion1}</p>
                    <p class="card-text">${proyecto.descripcion2}</p>
                    <p class="card-text">${proyecto.descripcion3}</p>
                    <p class="card-text">${proyecto.descripcion4}</p>
                    <p class="card-text">${proyecto.descripcion5}</p>
                    <a href="#" class="btn btn-danger delete" _id="${proyecto._id}">X</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
          ${format(proyecto.created_at)}
        </div>
      </div>
      `;
      proyectosCardContainer.appendChild(div);
    });
  }

  async addANewProyecto(proyecto) {
    await proyectoService.postProyecto(proyecto);
    this.renderProyecto();
    this.clearProyectoForm();
  }

  clearProyectoForm() {
    document.getElementById('proyecto-form').reset();
    document.getElementById('titulo').focus();
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
    const proyectoForm = document.querySelector('#proyecto-form');
    container.insertBefore(div, proyectoForm);
    // Removing the div after some secconds
    setTimeout(() => {
      document.querySelector('.message').remove();
    }, secondsToRemove);
  }

  async deleteProyecto(proyectoId) {
    await proyectoService.deleteProyecto(proyectoId);
    this.renderProyectos();
  }

}

export default UI;
