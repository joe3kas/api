import SliderService from '../services/SliderService';
const sliderService = new SliderService();

import { format } from 'timeago.js';

class UI {

  async renderSliders() {
    const sliders = await sliderService.getSliders();
    const slidersCardContainer = document.getElementById('sliders-cards');
    slidersCardContainer.innerHTML = '';
    sliders.forEach((slider) => {
      const div = document.createElement('div');
      div.className = 'animated fadeInRight';
      div.innerHTML = `
      <div class="card m-2">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${slider.image}" class="img-fluid" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-block px-2">
                    <h4 class="card-title">${slider.nombre}</h4>
                    <p class="card-text">${slider.descripcion}</p>
                    <a href="#" class="btn btn-danger delete" _id="${slider._id}">X</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
          ${format(slider.created_at)}
        </div>
      </div>
      `;
      slidersCardContainer.appendChild(div);
    });
  }

  async addANewSlider(slider) {
    await sliderService.postSlider(slider);
    this.renderSliders();
    this.clearSliderForm();
  }

  clearSliderForm() {
    document.getElementById('slider-form').reset();
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
    const sliderForm = document.querySelector('#slider-form');
    container.insertBefore(div, sliderForm);
    // Removing the div after some secconds
    setTimeout(() => {
      document.querySelector('.message').remove();
    }, secondsToRemove);
  }

  async deleteSlider(sliderId) {
    await sliderService.deleteSlider(sliderId);
    this.renderSliders();
  }

}

export default UI;
