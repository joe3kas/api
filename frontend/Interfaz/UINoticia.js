import NoticiaService from '../services/NoticiaService';
const noticiaService = new NoticiaService();

import { format } from 'timeago.js';

class UI {

  async renderNoticias() {
    const noticias = await noticiaService.getNoticias();
    const noticiasCardContainer = document.getElementById('noticias-cards');
    noticiasCardContainer.innerHTML = '';
    noticias.forEach((noticia) => {
      const div = document.createElement('div');
      div.className = 'animated fadeInRight';
      div.innerHTML = `
      <div class="card m-2">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${noticia.image}" class="img-fluid" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-block px-2">
                    <h4 class="card-title">${noticia.titulo}</h4>
                    <p class="card-text">${noticia.descripcion}</p>
                    <p class="card-text">${noticia.descripcion1}</p>
                    <p class="card-text">${noticia.descripcion2}</p>
                    <p class="card-text">${noticia.descripcion3}</p>
                    <a href="#" class="btn btn-danger delete" _id="${noticia._id}">X</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
          ${format(noticia.created_at)}
        </div>
      </div>
      `;
      noticiasCardContainer.appendChild(div);
    });
  }

  async addANewNoticia(noticia) {
    await noticiaService.postNoticia(noticia);
    this.renderNoticias();
    this.clearNoticiaForm();
  }

  clearNoticiaForm() {
    document.getElementById('noticia-form').reset();
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
    const noticiaForm = document.querySelector('#noticia-form');
    container.insertBefore(div, noticiaForm);
    // Removing the div after some secconds
    setTimeout(() => {
      document.querySelector('.message').remove();
    }, secondsToRemove);
  }

  async deleteNoticia(noticiaId) {
    await noticiaService.deleteNoticia(noticiaId);
    this.renderNoticias();
  }

}

export default UI;
