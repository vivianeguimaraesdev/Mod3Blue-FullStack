import React from "react";
import "./Register.css";
import Api from "../../api/api";

const Register = (props) => {
  const history = props.history;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const description = event.target.description.value;
    const priority = event.target.priority.value;
    const status = event.target.status.value;
    const deadline = event.target.deadline.value;

    const todo = {
      title,
      description,
      priority,
      status,
      deadline,
    };

    try {
      const response = await Api.fetchPost(todo);
      const result = await response.json();
      alert(result.message);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="registerContent">
        <h1 className="registerTxt">Cadastro de Tarefas</h1>
      <div className="registerBody">
        <form onSubmit={handleSubmit}>
          <div className="form">
          <label htmlFor="floatingInput">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="floatingInput"
              placeholder="Enter To-Do Title"
            />
          </div>
          <div className="form">
          <label htmlFor="floatingInput">Description</label>
            <textarea
              type="text"
              className="form-control"
              name="description"
              id="floatingInput"
              placeholder="Enter To-Do description"
            />
          </div>
          <div className="form">
          <label htmlFor="floatingPriority">Priority</label>
            <select
              className="form-control"
              name="priority"
              id="floatingPriority"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="form">
          <label htmlFor="floatingStatus">Status</label>
            <select className="form-control" name="status" id="floatingStatus">
              <option value="to-do">To-do</option>
              <option value="inProgress">In Progress</option>
              <option value="accomplished">Accomplished</option>
            </select>
          </div>
          <div className="form">
          <label htmlFor="floatingDeadline">Deadline</label>
            <input
              pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
              type="date"
              length="10"
              className="form-control"
              name="deadline"
              id="floatingDeadline"
            />
          </div>
          <div className="submitBtn">
            <button type="submit" className="btnSubmit">
              Send
            </button>
            <button className="cancelBtn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
