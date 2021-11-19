const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const Galeria = require('../models/Galeria');

router.get('/', async (req, res) => {
    const galerias = await Galeria.find().sort('-_id');
    res.json(galerias);
});

router.post('/', async (req, res) => {
    const { nombre} = req.body;
    const image = '/uploads/' + req.file.filename;
    const newGaleria = new Galeria({nombre, image});
    console.log(newGaleria)
    await newGaleria.save();
    res.json({'message': 'Galeria Saved'});
});

router.delete('/:id', async (req, res) => {
    const galeria = await Galeria.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./backend/public/' + galeria.image));
    res.json({message: 'galeria Deleted'});
});


module.exports = router;