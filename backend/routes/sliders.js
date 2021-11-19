const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const Slider = require('../models/Slider');

router.get('/', async (req, res) => {
    const sliders = await Slider.find().sort('-_id');
    res.json(sliders);
});

router.post('/', async (req, res) => {
    const { nombre, descripcion} = req.body;
    const image = '/uploads/' + req.file.filename;
    const newSlider = new Slider({nombre, descripcion, image});
    console.log(newSlider)
    await newSlider.save();
    res.json({'message': 'Slider Saved'});
});

router.delete('/:id', async (req, res) => {
    const slider = await Slider.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./backend/public/' + slider.image));
    res.json({message: 'slider Deleted'});
});


module.exports = router;