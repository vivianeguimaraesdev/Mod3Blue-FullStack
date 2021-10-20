import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../../api/api";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./CardInfo.css";

const CardInfo = (props) => {
  const _id = props.match.params.id;
  const [todo, setTodo] = useState({});
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    getTodoById();
  });

  const getTodoById = async () => {
    const response = await Api.fetchGetById(_id);
    const result = await response.json();
    setTodo(result);
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const response = await Api.fetchDelete(_id);
    const result = await response.json();
    alert(result.message);
    props.history.push("/");
  };

  return (
    <div className="cardInfoContainer">
      <h1 className="cardInfoTxt">Informação da Tarefa</h1>
      <div className="infoContent">
        <h2 className="titleInfo">{todo.title}</h2>
        <h3 className="descriptionInfo">{todo.description}</h3>
        <span className="priorityInfo">{todo.priority}</span>
        <span className="statusInfo">{todo.status}</span>
        <span className="deadlineInfo">{todo.deadline}</span>
        <h5 className="birthInfo">Data de criação : {todo.birthdate}</h5>
        <div className="editBtn">
          <button onclick={`/update/${todo._id}`} className="updtBtn">
            Atualizar
          </button>

          <button className="updtButton" onClick={onOpenModal}>
            Apagar
          </button>
        </div>
      </div>
      <div className="ModalDel">
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Gostaria mesmo de excluir essa tarefa?</h2>
        <button className="keepBtn" onClick={onCloseModal}>
          Não
        </button>
        <button className="delBtn" onClick={handleDelete}>
          Sim
        </button>
      </Modal>
      </div>
    </div>
  );
};

export default CardInfo;
