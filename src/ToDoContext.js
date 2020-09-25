import React, {createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {title: "Read a book", id: uuidv4()},
        {title: "Ride my bike", id: uuidv4()},
        {title: "Do my homework", id: uuidv4()}
    ]);

    const addTask = (userInput) => {
        setTasks([
            ...tasks,
            { 
                title: userInput,
                id: uuidv4()
            }
        ])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const completeTask = (id) => {

    }

    return <ToDoContext.Provider value={{tasks, addTask, completeTask, removeTask}}>
        {props.children}
    </ToDoContext.Provider>
};

export default ToDoContextProvider;

