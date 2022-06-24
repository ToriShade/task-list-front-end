import React, { useEffect } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import NewTaskForm from './components/NewTaskForm.js';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasksFromAPI();
  }, []);

  const getTasksFromAPI = () => {
    axios
      .get('https://task-list-api-c17.herokuapp.com/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log('OH NOES OH NOES! Could not get list of tasks');
      });
  };

  const flipIsComplete = (id) => {
    const todoTasks = [...tasks];
    let targetTask;

    for (let task of todoTasks) {
      if (task.id === id) {
        targetTask = task;
      }
    }

    if (targetTask.is_complete) {
      axios
        .patch(
          `https://task-list-api-c17.herokuapp.com/tasks/${targetTask.id}/mark_incomplete`
        )

        .then((response) => {
          const newTasks = [];
          for (const task of todoTasks) {
            if (task.id === id) {
              // eslint-disable-next-line camelcase
              task.is_complete = !task.is_complete;
            }
            newTasks.push(task);
          }
          setTasks(newTasks);
        })

        .catch((error) => {
          console.log('Unable to delete');
        });
    } else {
      axios
        .patch(
          `https://task-list-api-c17.herokuapp.com/tasks/${targetTask.id}/mark_complete`
        )

        .then((response) => {
          const newTasks = [];
          for (const task of todoTasks) {
            if (task.id === id) {
              // eslint-disable-next-line camelcase
              task.is_complete = !task.is_complete;
            }
            newTasks.push(task);
          }
          setTasks(newTasks);
        })

        .catch((error) => {
          console.log('Unable to mark complete');
        });
    }
  };

  const deleteTask = (id) => {
    console.log('delete', id);

    axios
      .delete(`https://task-list-api-c17.herokuapp.com/tasks/${id}`)
      .then((response) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
      })
      .catch((error) => {
        console.log('Unable to delete');
      });
  };

  const makeNewTask = (data) => {
    console.log(data);
    axios
      .post('https://task-list-api-c17.herokuapp.com/tasks', data)
      .then((response) => {
        getTasksFromAPI();
      })
      .catch((error) => {
        console.log("COULDN'T MAKE A NEW TASK OH NO! This is in Make New TASK");
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <NewTaskForm handleSubmission={makeNewTask} />
          <TaskList
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
