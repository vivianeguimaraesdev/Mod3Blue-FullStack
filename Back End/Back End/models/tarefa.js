const mongoose = require('mongoose');

const tarefaModel = mongoose.Schema({
   
    title: {type: String, required: true},
    descricao: {type: String, required: true},
    priority: {type: String, required: true},
    status:{type: String, required: false},
    deadline:{type: Date, required: false},
    birthdate: {type: Date, default: Date.now}
});

const Tarefa =  mongoose.model('tarefa', tarefaModel);

module.exports= Tarefa;