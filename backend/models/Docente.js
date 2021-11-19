const { Schema, model } = require('mongoose');

const DocenteSchema = new Schema({
    nombre: { type: String, required: true },
    titulo: { type: String, required: true },
    perfil: { type: String, required: true },
    docenteDe: { type: String, required: true },
    image: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Docente', DocenteSchema);