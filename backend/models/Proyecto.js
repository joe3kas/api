const { Schema, model } = require('mongoose');

const ProyectoSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion1: { type: String, required: true},
    descripcion2: { type: String, required: false},
    descripcion3: { type: String, required: false},
    descripcion4: { type: String, required: false},
    descripcion5: { type: String, required: false},
    descripcion6: { type: String, required: false},
    descripcion7: { type: String, required: false},
    descripcion8: { type: String, required: false},
    descripcion9: { type: String, required: false},
    descripcion10: { type: String, required: false},
    image: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Proyecto', ProyectoSchema);