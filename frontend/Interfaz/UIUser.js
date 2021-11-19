import UserService from '../services/UserService';
const userService = new UserService();

import { format } from 'timeago.js';

class UI {

  async renderUsers() {
    const users = await userService.getUsers();
    const usersCardContainer = document.getElementById('users-cards');
    usersCardContainer.innerHTML = '';
    users.forEach((user) => {
      const div = document.createElement('div');
      div.className = 'animated fadeInRight';
      div.innerHTML = `
      <div class="card m-2">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${user.image}" class="img-fluid" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-block px-2">
                    <h4 class="card-title">${user.nombre}</h4>
                    <p class="card-text">${user.descripcion}</p>
                    <a href="#" class="btn btn-danger delete" _id="${user._id}">X</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
          ${format(user.created_at)}
        </div>
      </div>
      `;
      usersCardContainer.appendChild(div);
    });
  }

  async addANewUser(user) {
    await userService.postUser(user);
    this.renderUsers();
    this.clearUserForm();
  }

  clearUserForm() {
    document.getElementById('user-form').reset();
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
    const userForm = document.querySelector('#user-form');
    container.insertBefore(div, userForm);
    // Removing the div after some secconds
    setTimeout(() => {
      document.querySelector('.message').remove();
    }, secondsToRemove);
  }

  async deleteUser(userId) {
    await userService.deleteUser(userId);
    this.renderUsers();
  }

}

export default UI;
