
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

// Initializations
const app = express();
require('./database');

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use('/api/v2/book', require('./routes/books'));
app.use('/api/v2/slider', require('./routes/sliders'));
app.use('/api/v2/proyecto', require('./routes/proyectos'));
app.use('/api/v2/docente', require('./routes/docentes'));
app.use('/api/v2/noticia', require('./routes/noticias'));
app.use('/api/v2/cuadro', require('./routes/cuadros'));
app.use('/api/v2/user', require('./routes/users'));
app.use('/api/v2/galeria', require('./routes/galeria'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});