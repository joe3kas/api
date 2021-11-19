const { Schema, model } = require('mongoose');

const NoticiaSchema = new Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    descripcion1: { type: String},
    descripcion2: { type: String},
    descripcion3: { type: String},
    image: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Noticia', NoticiaSchema);