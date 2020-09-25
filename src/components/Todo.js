import React, { Component, useContext } from 'react'
import { ToDoContext } from "../ToDoContext";


export default function Todo({tasks}) {

    const { removeTask, completeTask } = useContext(ToDoContext);

    return (
            <div key={tasks.id}>
                <li className="list-item">{tasks.title}
                <button className="list-item-btn" onClick={() => completeTask(tasks.id)}><i className="fa fa-check" aria-hidden="true"></i></button>
                <button className="list-item-btn" onClick={() => removeTask(tasks.id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                </li>
            </div>
        )
}
