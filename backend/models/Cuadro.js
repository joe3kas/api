const { Schema, model } = require('mongoose');

const CuadroSchema = new Schema({
    nombre: { type: String, required: true },
    grado: { type: Number, required: true},
    nivel: { type: String, required: true},
    motivo: { type: String, required: true},
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Cuadro', CuadroSchema);