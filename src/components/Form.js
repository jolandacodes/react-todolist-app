import React from 'react'

function Form({handleInput, search}) {
    return (
        <div className="form">
            <input type="text" onChange={handleInput}></input>
            <div className="button-box" onClick={search}>
                <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
            <div className="select">
                <select className="filter-todo">
                <option className="dropdown" value="all"> All</option>
                <option className="dropdown" value="completed"> Completed</option>
                <option className="dropdown" value="uncompleted"> Uncompleted</option>
            </select>
      </div>
        </div>
    )
}

export default Form;