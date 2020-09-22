import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';


function App() {

  const [prevState, setState] = useState(
    {
      input: ""
    }
  );

  const handleInput = (e) => {
    var userInput = e.target.value;

    setState({
      ...prevState, 
      input: userInput
    });

    console.log(prevState.input);
  }

  const search = (e) => {
 }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">
          <h1>To Do List</h1>
        </div>
        <Form handleInput={handleInput} search={search} />
        <List />
      </div>
    </div>
  );
}

export default App;
