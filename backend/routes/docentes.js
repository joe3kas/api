const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const Docente = require('../models/Docente');

router.get('/', async (req, res) => {
    const docentes = await Docente.find().sort('-_id');
    res.json(docentes);
});

router.post('/', async (req, res) => {
    const { nombre, titulo, perfil, docenteDe } = req.body;
    const image = '/uploads/' + req.file.filename;
    const newDocente = new Docente({nombre, titulo, perfil, docenteDe, image});
    console.log(newDocente)
    await newDocente.save();
    res.json({'message': 'Docente Saved'});
});

router.delete('/:id', async (req, res) => {
    const docente = await Docente.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./backend/public/' + docente.image));
    res.json({message: 'Docente Deleted'});
});


module.exports = router;