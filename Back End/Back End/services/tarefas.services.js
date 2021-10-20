const Tarefa = require('./../models/tarefa.js')

class TarefaService {
    
    findAll= async() => await Tarefa.find();

    findById= async(id) => await Tarefa.findById(id);

    create= async (tarefa) => await Tarefa.create(tarefa);

    update = async (id, tarefaAtualizada) => await Tarefa.updateOne({_id: id}, tarefaAtualizada);

    delete= async (id) => await Tarefa.deleteOne({_id:id})
}

module.exports = TarefaService;