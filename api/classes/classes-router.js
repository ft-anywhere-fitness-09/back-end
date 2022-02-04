const express = require('express');
const router = express.Router();
const { restricted } = require('./../auth/auth-middleware');
const Classes = require('./classes-model')


// http get :9000/api/classes
router.get('/', async (req, res, next)=>{
    try{
        const classes = await Classes.findAll()
        res.status(200).json(classes)
    }catch(err){
        next(err)
    }
})

// http get :9000/api/classes/1
router.get('/:class_id', async (req, res, next)=>{
    try{
        const classes = await Classes.findById(req.params.class_id)
        res.status(200).json(classes)
    }catch(err){
        next(err)
    }
})

// http post :9000/api/classes class_name=aaa class_duration class_duration='1 hour' max_class_size:=25 class_date='2021-11-19'  start_time='19:00:00' class_location='Gym Z'  class_instructor:=1
router.post('/', async (req, res, next)=>{
    try{
        const newClassesId = await Classes.add(req.body)
        res.status(200).json(newClassesId)
    }catch(err){
        next(err)
    }
})

// http put :9000/api/classes/1
router.put('/:class_id', async (req, res, next)=>{
    try{
        const classes = await Classes.update(req.params.class_id, req.body)
        res.status(200).json(classes)
    }catch(err){
        next(err)
    }
})

// http delete :9000/api/classes/1
router.delete('/:class_id', async (req, res, next)=>{
    try{
        const removed = await Classes.remove(req.params.class_id)
        res.status(200).json({message: `${removed} has been deleted successfully`})
    }catch(err){
        next(err)
    }
})

// // http post:9000/api/classes/signup
// router.post('/signup', async (req, res, next)=>{
//     try{
        
//     }catch(err){
//         next(err)
//     }
// })

module.exports = router;
