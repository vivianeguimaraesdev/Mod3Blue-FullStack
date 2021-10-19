import React from "react";
import CardList from "../../components/structure/CardList/CardList";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <h1 className="homeTxt">Lista de Tarefas</h1>
      <CardList />
    </div>
  );
};

export default Home;
