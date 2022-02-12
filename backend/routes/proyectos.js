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
    const { titulo, descripcion,descripcion1,descripcion2,descripcion3 } = req.body;
    const image = '/uploads/' + req.file.filename;
    const Proyecto = new Proyecto({titulo, descripcion, descripcion,descripcion1,descripcion2,descripcion3, image});
    console.log(newProyecto)
    await Proyecto.save();
    res.json({'message': 'Proyecto Guardado'});
});

router.delete('/:id', async (req, res) => {
    const proyecto = await Proyecto.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./backend/public/' + proyecto.image));
    res.json({message: 'Proyecto Elimindado'});
});


module.exports = router;