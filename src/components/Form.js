import React, { useState, useContext } from "react";
import { ToDoContext } from "../ToDoContext";

function Form() {
  const { addTask } = useContext(ToDoContext);

  const [userInput, setUserInput] = useState();

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    addTask(userInput);
    setUserInput("");
  };

  return (
    <div className="form">
        <div className="input-wrapper">
            <input type="text" onChange={handleInput} value={userInput}></input>
            <div className="btn-box" onClick={handleAdd}>
                <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
        </div>
        <div className="btns-wrapper">
            <button className="add-btn">Add Task</button>
            <button className="clear-btn">Clear Tasks</button>
            <div className="select-wrapper">
        <select className="filter-todo">
          <option className="dropdown" value="all">
            {" "}
            All
          </option>
          <option className="dropdown" value="completed">
            {" "}
            Completed
          </option>
          <option className="dropdown" value="uncompleted">
            {" "}
            Uncompleted
          </option>
        </select>
        <div className="filter-btn-box">
            <i className="fa fa-caret-down" aria-hidden="true"></i>
        </div>
      </div>
        </div>
        
    </div>
  );
}

export default Form;
