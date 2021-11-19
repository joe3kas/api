const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const User = require('../models/user');


router.post('/registro', (req, res) => {
   const {username, password} = req.body;
   
   const user = new User({username, password});

   user.save(err => {
       if(err){
           res.status(500).send("error al registrar")
       }else {
           res.status(200).send("registrado con exito")
       }
   })
});

router.post('/validacion', (req, res) => {
    const {username, password} = req.body;

    User.findOne({username}, (err, user)=>{
        if (err) {
            res.status(500).send("No se encontro usuario")
        } else if(!user){
            res.status(500).send("usuario no registrado")
        }else{
            user.isCorrectPass(password,  (err, result)=>{
                if (err) {
                    res.status(500).send("No se encontro usuario")
                }else if(result){
                    res.status(200).send("logueado")
                }else{
                    res.status(500).send("Usuario o Contraseña incorrecta")
                }
            })
        }
    })
});

module.exports = router;