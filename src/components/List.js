import React, { useContext } from 'react'
import Todo from './Todo'
import {ToDoContext} from '../ToDoContext'

const List = () => {
    const { tasks } = useContext(ToDoContext);
    return (
        <div className="lists">
            <ul className="todo-wrapper">
                {tasks.map((task) => {
                    return <Todo tasks={task} id={task.id}/>
                })}
            </ul>
        </div>
    )
}
export default List;
