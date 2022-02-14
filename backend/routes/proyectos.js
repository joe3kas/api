const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const Proyecto = require('../models/Proyecto');

router.get('/', async (req, res) => {
    const proyectos = await Proyecto.find().sort('-_id');
    res.json(proyectos);
});

router.post('/', async (req, res) => {
    const { nombre, descripcion1, descripcion2, descripcion3, descripcion4, descripcion5, descripcion6, descripcion7, descripcion8, descripcion9, descripcion10 } = req.body;
    const image = '/uploads/' + req.file.filename;
    const newProyecto = new Proyecto({ nombre, descripcion1, descripcion2, descripcion3, descripcion4, descripcion5, descripcion6, descripcion7, descripcion8, descripcion9, descripcion10, image });
    console.log(newProyecto)
    await newProyecto.save();
    res.json({ 'message': 'Proyecto Agregado' });
});

router.delete('/:id', async (req, res) => {
    const proyecto = await Proyecto.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./backend/public/' + proyecto.image));
    res.json({ message: 'proyecto Eliminado' });
});


module.exports = router;