const mongoose = require("mongoose");
const TarefasService = require("../services/tarefas.services");

const tarefasService = new TarefasService();

class TarefasController {
  getTarefas = async (req, res) => {
    const tarefas = await tarefasService.findAll();
    res.status(302).send(tarefas);
  };

  getTarefaById = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(403).send({
        menssege: `ID:${tarefaid} inválido, tente novamente com outro ID`,
      });
      return;
    }
    const tarefaid = await tarefasService.findById(id);

    if (!tarefaid) {
      res.status(404).send("Tarefa não encontrada");
      return;
    }

    res.status(200).send(tarefaid);
  };

  createTarefas = async (req, res) => {
    console.log(req.body);
    const tarefa = req.body;
    console.log(tarefa);
    try {
      const tarefaSalva = await tarefasService.create(tarefa);
      res.status(201).send({
        message: `Tarefa : ${tarefaSalva.title} adicionada com sucesso`,
      });
    } 
    catch (err) {
      console.log(err);
      res.status(500).send({
        error: err,
      });
    }
  };

  updateTarefas = async (req, res) => {
    const id = req.params.id;
    const tarefaEdit = req.body;
    const tarefaSalva = await tarefasService.update(id, tarefaEdit);
    res.status(200).send({
      message: `Tarefa atualizada com sucesso`,
    });
  };

  deleteTarefaById = async (req, res) => {
    const id = req.params.id;
    await tarefasService.delete(id);
    res.status(200).send({
      menssege: `Tarefa excluida  com sucesso`,
    });
  };
}

module.exports = TarefasController;
