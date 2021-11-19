const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const Noticia = require('../models/Noticia');

router.get('/', async (req, res) => {
    const noticias = await Noticia.find().sort('-_id');
    res.json(noticias);
});

router.post('/', async (req, res) => {
    const { titulo, descripcion,descripcion1,descripcion2,descripcion3 } = req.body;
    const image = '/uploads/' + req.file.filename;
    const newNoticia = new Noticia({titulo, descripcion, descripcion,descripcion1,descripcion2,descripcion3, image});
    console.log(newNoticia)
    await newNoticia.save();
    res.json({'message': 'Noticia Saved'});
});

router.delete('/:id', async (req, res) => {
    const noticia = await Noticia.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./backend/public/' + noticia.image));
    res.json({message: 'Noticia Deleted'});
});


module.exports = router;