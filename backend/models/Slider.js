const { Schema, model } = require('mongoose');

const SliderSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String},
    image: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Slider', SliderSchema);