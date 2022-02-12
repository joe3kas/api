const { Schema, model } = require('mongoose');

const ProyectoSchema = new Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    descripcion1: { type: String , required: false},
    descripcion2: { type: String , required: false},
    descripcion3: { type: String , required: false},
    descripcion4: { type: String , required: false},
    descripcion5: { type: String , required: false},
    image1: { type: String, required: true },
    image2: { type: String, required: false },
    image3: { type: String, required: false },
    image4: { type: String, required: false },
    image5: { type: String, required: false },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Proyecto', ProyectoSchema);