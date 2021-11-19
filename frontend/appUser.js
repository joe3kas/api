import "./styles/app.css";

import User from './models/User.js';
import UI from './Interfaz/UIUser.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderUsers();
});


document.getElementById('user-form')
  .addEventListener('submit', function(e) {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui = new UI();

    // New slider Object
    const user = new User(username, password);

    // Validating User Input
    if (username === '' || password === '' ) {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new slider to the UI
      ui.addANewUser(formData);
      ui.renderMessage('New user Added Successfully', 'success', 2000);
    }

    e.preventDefault();
  });

