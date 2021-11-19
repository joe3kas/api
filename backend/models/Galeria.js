const { Schema, model } = require('mongoose');

const GaleriaSchema = new Schema({
    nombre: { type: String, required: true },
    image: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Galeria', GaleriaSchema);