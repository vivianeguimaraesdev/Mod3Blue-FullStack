import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navContainer">
        <Link to="/" className="tasksPage">
          Lista de Tarefas
        </Link>
      </div>  
      <div className="navList">
        <ul className="navUl">
          <li className="navItem">
            <Link to="/" className="navLink">Home</Link>
          </li>
          <li className="navItem">
            <Link to="/register" className="navLink">Novo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
