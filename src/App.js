import './App.css';
import { InputForm } from './components/InputForm';
import { Title } from "./components/Title";
import { TodoList } from './components/TodoList';
import React, { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <Title/>
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
