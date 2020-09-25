import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import ToDoContextProvider from './ToDoContext'


function App() {

  return (
    <ToDoContextProvider>
    <div className="App">
      <div className="wrapper">
        <div className="second-wrapper">
          <div className="header">
            <h1>To Do List</h1>
          </div>
          <Form />
          <List />
        </div>
      </div>
    </div>
    </ToDoContextProvider>
  );
}

export default App;
