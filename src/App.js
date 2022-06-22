import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';



const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Mow the lawn',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Cook Pasta',
      isComplete: true,
    },
  ]);
  
  
  // const [tasks, setTasks] =
  const flipIsComplete = (id) => {
    const newTasks = [];
    for (const task of tasks) {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      newTasks.push(task);
    }
    setTasks(newTasks);
  };



  const deleteTask = (id) => {
    const newTasks = [];
    for (const task of tasks) {
      if (task.id !== id) {
        newTasks.push(task);
      }
    }
    setTasks(newTasks);
    };
  // };

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList 
        tasks={tasks}
        onClickCallback={flipIsComplete}
        onDeleteCallback={deleteTask}
        />
        </div>
      </main>
    </div>
  );
};

export default App;
