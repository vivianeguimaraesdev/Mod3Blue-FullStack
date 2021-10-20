const express = require('express');
const TarefasController = require('./../controllers/tarefas.controllers');

const router = express.Router();
const tarefasController = new TarefasController();


router.get('/',tarefasController.getTarefas);

router.get('/:id', tarefasController.getTarefaById)

router.post('/add', tarefasController.createTarefas);

router.put('/:id', tarefasController.updateTarefas);

router.delete('/:id', tarefasController.deleteTarefaById);


module.exports= router;